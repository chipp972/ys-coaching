import React from 'react';
import { load, ReCaptchaInstance } from 'recaptcha-v3';
import { isNetlifyCms } from './is-cms';

export enum ReCaptchaAction {
  SUBMIT_CONTACT = 'submit_contact',
  SUBMIT_PRODUCTS = 'submit_products',
}

const reCaptchaSingleton: {
  instance?: ReCaptchaInstance;
} = { instance: null };

/**
 * Load ReCaptcha return a ref to a ReCaptcha instance
 */
export const loadReCaptcha = async () => {
  if (!reCaptchaSingleton.instance && !isNetlifyCms()) {
    const recaptchaInstance = await load(process.env.GATSBY_APP_SITE_RECAPTCHA_KEY, {
      // TODO: Must add some text in the footer to hide the badge
      autoHideBadge: false
    });
    // eslint-disable-next-line fp/no-mutation, require-atomic-updates
    reCaptchaSingleton.instance = recaptchaInstance;
  }
  return reCaptchaSingleton.instance;
};

/**
 * Retrieve a recaptcha token before sending some data to a function
 */
export const getReCaptchaToken = async (action: ReCaptchaAction) => {
  if (!reCaptchaSingleton.instance) {
    await loadReCaptcha();
  }
  return reCaptchaSingleton.instance.execute(action);
};

/**
 * Trigger load ReCaptcha from within a component
 */
export const useReCaptcha = () => {
  React.useEffect(() => {
    loadReCaptcha();
  }, []);
};
