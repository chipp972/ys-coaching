import {
  createActionCreator,
  createActionCreatorWithoutData
} from '@chipp972/redux-helpers';
import { actions } from './products.constant';

export const setComment = createActionCreator<string>(
  actions.PRODUCTS_SET_COMMENT
);

export const setDateTime = createActionCreator<Date>(
  actions.PRODUCTS_SET_DATE_TIME
);

export const setEmail = createActionCreator<string>(actions.PRODUCTS_SET_EMAIL);

export const setFirstName = createActionCreator<string>(
  actions.PRODUCTS_SET_FIRSTNAME
);

export const setLastName = createActionCreator<string>(
  actions.PRODUCTS_SET_LASTNAME
);

export const setLocation = createActionCreator<string>(
  actions.PRODUCTS_SET_LOCATION
);

export const setPlan = createActionCreator<string>(actions.PRODUCTS_SET_PLAN);

export const goNextStep = createActionCreatorWithoutData(
  actions.PRODUCTS_GO_NEXT_STEP
);

export const goPrevStep = createActionCreatorWithoutData(
  actions.PRODUCTS_GO_PREV_STEP
);

export const jumpToStep = createActionCreator<number>(
  actions.PRODUCTS_JUMP_TO_STEP
);
