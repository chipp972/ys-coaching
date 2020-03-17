import {
  actions,
  initialState,
  reducerKey
} from './products.constant';
import { ProductsState as _ProductsState } from './products.type';
import { createReducer } from '@chipp972/redux-helpers';

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
    })
  },
  initialState
);
