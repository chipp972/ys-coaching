import * as R from 'ramda';
import { reducerKey, orderedStepList } from './products.constant';
import { AppState } from '../../../store/store.type';

export const getCurrentStep: (state: AppState) => string = R.path([reducerKey, 'currentStep']);

export const getCurrentStepIndex: (state: AppState) => number = R.pipe(
  getCurrentStep,
  (currentStep: string) => orderedStepList.findIndex(R.equals(currentStep))
);

export const getSelectedPlan: (state: AppState) => string = R.path([reducerKey, 'plan']);

export const getSelectedDate: (state: AppState) => Date = R.path([reducerKey, 'dateTime']);

export const getSelectedLocation: (state: AppState) => string = R.path([reducerKey, 'location']);

export const getEmail: (state: AppState) => string = R.path([reducerKey, 'email']);

export const getFirstName: (state: AppState) => string = R.path([reducerKey, 'firstName']);

export const getLastName: (state: AppState) => string = R.path([reducerKey, 'lastName']);

export const getComment: (state: AppState) => string | undefined = R.path([reducerKey, 'lastName']);
