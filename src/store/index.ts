import {
  // Action,
  combineReducers,
  configureStore,
  // ThunkAction,
} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import AuthReducer from 'store/reducers/auth-reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
