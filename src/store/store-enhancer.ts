import { applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreParams } from './store.type';

export const getStoreEnhancers = ({
  isDebug,
  isPreview
}: StoreParams): StoreEnhancer => {
  const middlewares: Middleware[] = [].filter(Boolean);
  const enhancers = applyMiddleware(...middlewares);
  const name = isPreview ? 'Preview - ys-coaching' : 'ys-coaching';

  return isDebug ? composeWithDevTools({ name })(enhancers) : enhancers;
};
