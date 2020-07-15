/* eslint-disable @typescript-eslint/camelcase */
import { connect } from 'node-mailjet';

const templateIds = {
  customer: 1432614,
  yuto: 0
};

// eslint-disable-next-line max-lines-per-function
export async function handler() {
  try {
    const mailjet = connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET, {
      version: 'v3.1',
      // TODO: don't forget to remove the test variable npm run develop
      perform_api_call: process.env.MAILJET_SANDBOX !== '1'
    });

    // TODO: Retrieve email, firstname, lastname and message
    const email = 'pierrecharles.nicolas@gmail.com';
    const lastname = 'Pierre-charles';
    const firstname = 'Nicolas';
    const message = 'Test message';

    const result = await mailjet.post('send').request({
      SandboxMode: process.env.MAILJET_SANDBOX !== '1',
      Messages: [
        {
          From: {
            Email: 'hello@ys-coaching.fr',
            Name: 'ys-coaching'
          },
          To: [
            {
              Email: email,
              Name: `${firstname} ${lastname}`
            }
          ],
          TemplateID: templateIds.customer,
          TemplateLanguage: true,
          Subject: '[Ys-coaching] Product customer request',
          Variables: {
            prénom: firstname,
            nom: lastname,
            message,
            email
          }
        }
      ]
    });

    console.log(result.body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        response: result.body
      })
    };
  } catch (error) {
    console.log(error.statusCode);
    console.log(error);

    return {
      statusCode: error.statusCode,
      body: JSON.stringify({
        response: error
      })
    };
  }
}
