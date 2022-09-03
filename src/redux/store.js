// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import productSaga from './productSaga';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
const sagamiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagamiddleware],
});
sagamiddleware.run(productSaga);
// const store =createStore(rootReducer)
export default store;
