import {
  applyMiddleware,
  Middleware,
  StoreEnhancer
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreParams } from './store.type';

export const getStoreEnhancers = ({ isDebug, isPreview }: StoreParams): StoreEnhancer => {
  const middlewares: Middleware[] = [].filter(Boolean);
  const enhancers = applyMiddleware(...middlewares);

  return isDebug
    ? composeWithDevTools({ name: isPreview ? 'Preview - ys-coaching' : 'ys-coaching' })(enhancers)
    : enhancers;
};
