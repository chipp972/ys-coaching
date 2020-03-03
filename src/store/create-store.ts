import {
  createStore,
  PreloadedState,
  Store
} from 'redux';
import { rootReducer } from './root-reducer';
import { AppState, StoreParams } from './store.type';
import { getStoreEnhancers } from './store-enhancer';

export const makeStore = ({ isDebug, isPreview, preloadedState }: StoreParams): Store =>
  createStore(rootReducer, preloadedState, getStoreEnhancers({ isDebug, isPreview }));

export const MakePreviewStore = () => makeStore({ isDebug: true, isPreview: true });

export default (preloadedState: PreloadedState<AppState>) =>
  makeStore({ isDebug: process.env.NODE_ENV === 'development', isPreview: false, preloadedState });
