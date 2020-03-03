import { actions, initialState, reducerKey, orderedStepList, steps } from './products.constant';
import { ProductsState as _ProductsState } from './products.type';
import { createReducer } from '@chipp972/redux-helpers';

export const productsReducerKey = reducerKey;

export type ProductsState = _ProductsState;

const changeStep = (currentStep: string, jump: number) => {
  const currentStepIndex = orderedStepList.indexOf(currentStep);
  const nextStepIndex = currentStepIndex + jump;
  const maxStepIndex = orderedStepList.length - 1;
  return orderedStepList[nextStepIndex > maxStepIndex ? maxStepIndex : nextStepIndex];
};

export const productsReducer = createReducer<ProductsState>(
  {
    [actions.PRODUCTS_GO_NEXT_STEP]: (state) => ({
      ...state,
      currentStep: !!state.currentStep
        ? steps.PLAN_CHOICE
        : changeStep(state.currentStep, 1)
    }),
    [actions.PRODUCTS_GO_PREV_STEP]: (state) => ({
      ...state,
      currentStep: !!state.currentStep
        ? steps.PLAN_CHOICE
        : changeStep(state.currentStep, -1)
    }),
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
