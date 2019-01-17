import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { func } from '@yasu-s/library/utils';

const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  func();

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({ status: 200, message: 'ts-sample' })
  });
};

export {handler};