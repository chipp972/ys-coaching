import fetch from 'node-fetch';

const reCaptchaMinimumScore = 0.5;

const getReCaptchaCheckUrl = (token: string, secret: string) =>
  `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

const isReCaptchaTokenInvalid = ({ response, result, action }) =>
  !response.ok
  || !result.success
  || result?.score < reCaptchaMinimumScore
  || result?.action !== action;

export const checkReCaptchaToken = async (token: string, action: string) => {
  const response = await fetch(getReCaptchaCheckUrl(token, process.env.SITE_RECAPTCHA_SECRET), {
    method: 'POST'
  });

  const result = await response.json();

  if (isReCaptchaTokenInvalid({ response, result, action })) {
    throw new Error(result?.['error-codes'].join(' ') || 'Recaptcha service error');
  }
};
