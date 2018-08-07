import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import products from "./reducers/ProductReducers";
import productSaga from "./sagas/ProductSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    products
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productSaga);

export default store;
