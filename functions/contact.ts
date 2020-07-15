/* eslint-disable @typescript-eslint/camelcase */
import { connect } from 'node-mailjet';
import { ReCaptchaAction } from '../src/common/helpers/recaptcha';
import { emailSendApiVersion, getMailSender, getTemplateId, isSandboxMode, TemplateName } from '../src/server/mail';
import { checkReCaptchaToken } from '../src/server/recaptcha';

const contactMailSubject = 'Someone is trying to reach you';

export async function handler (event) {
  try {
    const { recaptchaToken, ...Variables } = JSON.parse(event.body);

    await checkReCaptchaToken(recaptchaToken, ReCaptchaAction.SUBMIT_CONTACT);

    const mailjet = connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET, {
      version: emailSendApiVersion,
      perform_api_call: !isSandboxMode
    });

    const mailSender = await getMailSender({ isBulk: false, mailjet });

    const templateId = await getTemplateId({ name: TemplateName.contact, mailjet });

    const result = await mailjet.post('send').request({
      SandboxMode: isSandboxMode,
      Messages: [
        {
          From: mailSender,
          To: [mailSender],
          TemplateID: templateId,
          TemplateLanguage: true,
          Subject: contactMailSubject,
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
