import { createActionCreator } from '@chipp972/redux-helpers';
import { actions } from './products.constant';

export const setDateTime = createActionCreator<Date>(
  actions.PRODUCTS_SET_DATE_TIME
);

export const setLocation = createActionCreator<string>(
  actions.PRODUCTS_SET_LOCATION
);

export const setPlan = createActionCreator<string>(actions.PRODUCTS_SET_PLAN);
