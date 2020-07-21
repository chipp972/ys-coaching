export const actions = {
  PRODUCTS_SET_PLAN: 'PRODUCTS_SET_PLAN',
  PRODUCTS_SET_DATE_TIME: 'PRODUCTS_SET_DATE_TIME',
  PRODUCTS_SET_LOCATION: 'PRODUCTS_SET_LOCATION'
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
  date: null,
  location: null
};

export enum Fieldnames {
  plan = 'plan',
  date = 'dateTime',
  location = 'location',
  homeAddress = 'homeAddress',
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  additionalInformations = 'additionalInformations'
}

export const carouselId = 'products';

export const productsRequestEndPoint = '/.netlify/functions/products';
