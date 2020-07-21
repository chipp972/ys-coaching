export type ContactFormData = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  recaptchaToken?: string;
};

export type ProductsFormData = {
  email: string;
  firstName: string;
  lastName: string;
  plan: string;
  date: string;
  location: string;
  additionalInformations?: string;
  recaptchaToken?: string;
};
