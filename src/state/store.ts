import {
  configureStore,
  combineReducers,
  unwrapResult as nativeUnwrapResult
} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';

import peopleReducer from './slices/peopleSlice';
import planetsReducer from './slices/planetsSlice';

const reducers = combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
});


export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
// To use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDispatch = () => useNativeDispatch<any>();
export const useSelector: TypedUseSelectorHook<RootState> = useNativeSelector;

export const unwrapResult = nativeUnwrapResult;

export default store;
