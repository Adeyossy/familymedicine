import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";

const baseHandler: Handler = async (event: HandlerEvent, context: HandlerContext): Promise<Response> => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
}