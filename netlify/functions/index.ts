import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import type { Response } from "@netlify/functions/dist/function/response";

const firebaseConfig = {
  apiKey: process.env['API_KEY'],
  authDomain: process.env['AUTH_DOMAIN'],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['STORAGE_BUCKET'],
  messagingSenderId: process.env['MESSAGING_SENDER_ID'],
  appId: process.env['APP_ID']
};

// const firebase = initializeApp(firebaseConfig);

// const auth = getAuth(firebase);

const handler: Handler = async (event: HandlerEvent, context: HandlerContext): Promise<Response> => {

  return {
    statusCode: 200,
    body: JSON.stringify(firebaseConfig)
  }
  
};

// const handler = middy(baseHandler).use(httpHeaderNormalizer()).use(urlEncodeBodyParser());

export { handler };
