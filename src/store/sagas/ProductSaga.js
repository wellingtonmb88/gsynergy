import {
  SUCCESS_PRODUCT_LIST,
  FAILURE_PRODUCT_LIST
} from "../reducers/ProductReducers";
import { REQUEST_PRODUCT_LIST } from "../actions/ProductActions";
import apiGetProductList from "../../services/ProductApi";

import { takeLatest, put, call } from "redux-saga/effects";

export function* getProductList() {
  try {
    const response = yield call(apiGetProductList);
    yield put({ type: SUCCESS_PRODUCT_LIST, payload: { data: response } });
  } catch (err) {
    yield put({ type: FAILURE_PRODUCT_LIST });
  }
}

export default function* root() {
  yield [takeLatest(REQUEST_PRODUCT_LIST, getProductList)];
}
