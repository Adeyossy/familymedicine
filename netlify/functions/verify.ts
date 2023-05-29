import middy from "@middy/core";
import { HandlerContext, HandlerEvent } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import { initializeApp } from "firebase/app";
import { User, applyActionCode, getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import urlEncodeBodyParser from "@middy/http-urlencode-body-parser";

const firebaseConfig = {
  apiKey: process.env['API_KEY'],
  authDomain: process.env['AUTH_DOMAIN'],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['STORAGE_BUCKET'],
  messagingSenderId: process.env['MESSAGING_SENDER_ID'],
  appId: process.env['APP_ID']
};

const app = initializeApp(firebaseConfig);


const verificationHandler = async (event: HandlerEvent, context: HandlerContext): Promise<Response> => {
  const auth = getAuth();
  const userr = auth.currentUser;
  const body = event.body;
  const bodyObject = body ? JSON.parse(body) as {user: User} : {user: null};
  const user = bodyObject.hasOwnProperty('user') ? bodyObject.user : null;
  
  const actionCodeSettings = {
    url: 'https://radiant-souffle-dd4b92.netlify.app/',
    handleCodeInApp: false
  };
  
  if (user) {
    if (!user.emailVerified) {
      try {
        await sendEmailVerification(userr as User, actionCodeSettings);
        // await applyActionCode(auth, String(Math.random() * (1000000 - 1)));
        console.log('3');
      } catch (error) {
        console.log('4e');
        return {
          statusCode: 500,
          body: JSON.stringify({error, message: "error occurred"})
        }
      }

      console.log('5');

      return {
        statusCode: 200,
        body: JSON.stringify({message: "Verification Email has been sent"})
      }

    } else {
      console.log('6');

      return {
        statusCode: 200,
        body: JSON.stringify({message: "Your email is already verified"})
      }
    }
  } else {
    console.log('7');
    return {
      statusCode: 400,
      body: JSON.stringify({message: "You don't seem to have an account"})
    }
  }
}

const handler = middy(verificationHandler).use(urlEncodeBodyParser());

export { handler }