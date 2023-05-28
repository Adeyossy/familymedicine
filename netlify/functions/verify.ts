import middy from "@middy/core";
import { HandlerContext, HandlerEvent } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

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
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (user) {
    return sendEmailVerification(user).then(() => {
      return {
        statusCode: 200,
        body: JSON.stringify("Verification Email has been sent")
      }
    }).catch((error) => {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Error sending verification email", 
          error})
      }
    });
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify("No user was found")
    }
  }
}

const handler = middy(verificationHandler);

export { handler }