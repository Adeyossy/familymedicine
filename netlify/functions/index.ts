import type { Handler, HandlerEvent, HandlerContext, HandlerCallback } from "@netlify/functions";
import type { Response } from "@netlify/functions/dist/function/response";
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import middy from "@middy/core";
import urlEncodeBodyParser from "@middy/http-urlencode-body-parser";
import httpHeaderNormalizer from '@middy/http-header-normalizer';

const firebaseConfig = {
  apiKey: process.env['API_KEY'],
  authDomain: process.env['AUTH_DOMAIN'],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['STORAGE_BUCKET'],
  messagingSenderId: process.env['MESSAGING_SENDER_ID'],
  appId: process.env['APP_ID']
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

const baseHandler = async (event: HandlerEvent, context: HandlerContext): Promise<Response> => {
  // your server-side functionality
  const auth = getAuth();
  console.log(event.body);

  const body = event.body as unknown as { email: string, password: string };

  let email = '';
  let password = '';

  if (body) {
    if (body.hasOwnProperty('email')) {
      email = body.email;
    }

    if (body.hasOwnProperty('password')) {
      password = body.password;
    }
  }

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user => ", user);
      // ...

      return {
        statusCode: 200,
        body: JSON.stringify(user)
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return {
        statusCode: 500,
        body: JSON.stringify(error)
      };
    });
};

const handler = middy(baseHandler).use(httpHeaderNormalizer()).use(urlEncodeBodyParser());

export { handler };
