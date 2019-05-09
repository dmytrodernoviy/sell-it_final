import { watchFetchProductList } from "./productListSaga";
import { watchFetchProductItem } from "./productItemSaga";
import { all } from 'redux-saga/effects'

export function * rootSaga() {
    yield all([
      watchFetchProductList(),
      watchFetchProductItem()
    ])
  }