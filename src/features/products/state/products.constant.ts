export const actions = {
  PRODUCTS_SET_PLAN: 'PRODUCTS_SET_PLAN',
  PRODUCTS_SET_DATE_TIME: 'PRODUCTS_SET_DATE_TIME',
  PRODUCTS_SET_LOCATION: 'PRODUCTS_SET_LOCATION',
  PRODUCTS_SET_EMAIL: 'PRODUCTS_SET_EMAIL',
  PRODUCTS_SET_FIRSTNAME: 'PRODUCTS_SET_FIRSTNAME',
  PRODUCTS_SET_LASTNAME: 'PRODUCTS_SET_LASTNAME',
  PRODUCTS_SET_COMMENT: 'PRODUCTS_SET_COMMENT'
};

export const reducerKey = 'products';

export const steps = {
  PLAN_CHOICE: 'PLAN_CHOICE',
  DATE_TIME_CHOICE: 'DATE_TIME_CHOICE',
  LOCATION: 'LOCATION',
  CONFIRMATION: 'CONFIRMATION',
  THANK_YOU: 'THANK_YOU'
};

export const initialState = {
  plan: null,
  dateTime: null,
  location: null,
  email: null,
  firstName: null,
  lastName: null,
  comment: null
};
