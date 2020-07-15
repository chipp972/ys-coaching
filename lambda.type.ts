import { Handler } from 'aws-lambda';

type Event = {
  /** Path parameter */
  path: string;
  /** Incoming request's method name */
  httpMethod: string;
  /** Incoming request headers */
  headers: { [key: string]: string };
  /** Query string parameters */
  queryStringParameters: { [key: string]: string };
  /** A JSON string of the request payload */
  body: string;
  /** A boolean flag to indicate if the applicable request payload is Base64-encode */
  isBase64Encoded: boolean;
};

type Result = {
  isBase64Encoded?: boolean;
  statusCode: number;
  headers?: { [key: string]: string };
  body?: string;
};

export type LambdaHandler = Handler<Event, Result>;
