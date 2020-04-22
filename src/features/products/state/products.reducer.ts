import { createReducer } from '@chipp972/redux-helpers';
import { actions, initialState, reducerKey } from './products.constant';
import { ProductsState as _ProductsState } from './products.type';

export const productsReducerKey = reducerKey;

export type ProductsState = _ProductsState;

export const productsReducer = createReducer<ProductsState>(
  {
    [actions.PRODUCTS_SET_PLAN]: (state, plan) => ({
      ...state,
      plan
    }),
    [actions.PRODUCTS_SET_DATE_TIME]: (state, dateTime) => ({
      ...state,
      dateTime
    }),
    [actions.PRODUCTS_SET_LOCATION]: (state, location) => ({
      ...state,
      location
    }),
    [actions.PRODUCTS_SET_EMAIL]: (state, email) => ({
      ...state,
      email
    }),
    [actions.PRODUCTS_SET_FIRSTNAME]: (state, firstName) => ({
      ...state,
      firstName
    }),
    [actions.PRODUCTS_SET_LASTNAME]: (state, lastName) => ({
      ...state,
      lastName
    }),
    [actions.PRODUCTS_SET_COMMENT]: (state, comment) => ({
      ...state,
      comment
    })
  },
  initialState
);
