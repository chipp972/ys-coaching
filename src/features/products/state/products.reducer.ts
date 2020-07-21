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
    [actions.PRODUCTS_SET_DATE_TIME]: (state, date) => ({
      ...state,
      date
    }),
    [actions.PRODUCTS_SET_LOCATION]: (state, location) => ({
      ...state,
      location
    })
  },
  initialState
);
