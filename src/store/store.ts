import {combineReducers, configureStore} from '@reduxjs/toolkit';
import homePageSlice from './slices/homePage/home-page-slice';
import testSlice from './slices/testSlice/test';

const rootReducer = combineReducers({homePageSlice, testSlice});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
