import { combineReducers } from 'redux';
import {
  productsReducer,
  productsReducerKey
} from '../features/products/state/products.reducer';

export const rootReducer = combineReducers({
  [productsReducerKey]: productsReducer
});
