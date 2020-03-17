import { combineReducers } from 'redux';
import {
  productsReducer,
  productsReducerKey
} from '../features/products/state/products.reducer';
import { carouselReducerKey, carouselReducer } from '@chipp972/carousel';

export const rootReducer = combineReducers({
  [productsReducerKey]: productsReducer,
  [carouselReducerKey]: carouselReducer
});
