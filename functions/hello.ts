import { LambdaHandler } from '../lambda.type';

const count = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

export const handler: LambdaHandler = async (event, context) => {
  console.log('queryStringParameters', event.queryStringParameters);
  console.log('context', context);
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello, World! This is better ${ Math.round(Math.random() * 10)}`,
      count: await count()
    })
  };
};
