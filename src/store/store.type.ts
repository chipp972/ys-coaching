import {
  productsReducerKey,
  ProductsState
} from '../features/products/state/products.reducer';
import { PreloadedState } from 'redux';

export type StoreParams = {
  isDebug: boolean;
  isPreview: boolean;
  preloadedState?: PreloadedState<AppState>;
};

export type AppState = {
  [productsReducerKey]: ProductsState;
};
