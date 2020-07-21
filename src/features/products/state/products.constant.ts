export const actions = {
  PRODUCTS_SET_PLAN: 'PRODUCTS_SET_PLAN',
  PRODUCTS_SET_DATE_TIME: 'PRODUCTS_SET_DATE_TIME',
  PRODUCTS_SET_LOCATION: 'PRODUCTS_SET_LOCATION'
};

export const reducerKey = 'products';

export enum Fieldnames {
  plan = 'plan',
  date = 'date',
  location = 'location',
  homeAddress = 'homeAddress',
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  additionalInformations = 'additionalInformations'
}

export const initialState = {
  plan: null,
  date: null,
  location: null
};

export const productsRequestEndPoint = '/.netlify/functions/products';
