import { func, getMessage } from '@yasu-s/library/utils';

exports.handler = async (event: any, context: any) => {
  let response: any;

  try {
    func();

    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'typescript - ' + getMessage(),
      })
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
