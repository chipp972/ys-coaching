import { connect } from 'node-mailjet';
import { ReCaptchaAction } from '../src/common/helpers/recaptcha';
import { ProductsFormData } from '../src/server/data.type';
import { emailSendApiVersion, getMailSender, getTemplateId, isSandboxMode } from '../src/server/mail';
import { checkReCaptchaToken } from '../src/server/recaptcha';
import { productsConfirmationSubject, productsConfirmationTemplateName, productsServiceSubject, productsServiceTemplateName } from '../src/settings/email.json';

export async function handler (event) {
  try {
    const { recaptchaToken, ...Variables } = JSON.parse(event.body) as ProductsFormData;

    await checkReCaptchaToken(recaptchaToken, ReCaptchaAction.SUBMIT_PRODUCTS);

    const mailjet = connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET, {
      version: emailSendApiVersion,
      perform_api_call: !isSandboxMode
    });

    const mailSender = await getMailSender({ isBulk: false, mailjet });

    const serviceTemplateId = await getTemplateId({ templateName: productsServiceTemplateName, mailjet });
    const confirmationTemplateId = await getTemplateId({ templateName: productsConfirmationTemplateName, mailjet });

    const result = await mailjet.post('send').request({
      SandboxMode: isSandboxMode,
      Messages: [
        {
          From: mailSender,
          To: [mailSender],
          TemplateID: serviceTemplateId,
          TemplateLanguage: true,
          Subject: productsServiceSubject,
          Variables
        },
        {
          From: mailSender,
          To: [{
            Email: Variables.email,
            Name: `${Variables.firstName} ${Variables.lastName}`
          }],
          TemplateID: confirmationTemplateId,
          TemplateLanguage: true,
          Subject: productsConfirmationSubject,
          Variables
        }
      ]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        response: result.body
      })
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        response: error
      })
    };
  }
}
