import * as R from 'ramda';
import { AppState } from '../../../store/store.type';
import { Fieldnames, reducerKey } from './products.constant';
import { ProductsState } from './products.type';

export const getSelectedPlan: (state: AppState) => string = R.path([reducerKey, Fieldnames.plan]);

export const getSelectedDate: (state: AppState) => Date = R.path([reducerKey, Fieldnames.date]);

export const getSelectedLocation: (state: AppState) => string = R.path([reducerKey, Fieldnames.location]);

export const getProductsFormData: (state: AppState) => ProductsState = R.path([reducerKey]);
