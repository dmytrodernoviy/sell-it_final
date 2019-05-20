import { requestProductItem,
         requestProductItemSuccess, 
         requestProductItemError } from "../action-creators/productItemActionCreator";
import {put, call, takeEvery} from 'redux-saga/effects'
import { fetchProductItem } from "../api-client/productAPI";


function* fetchProductItemtAsync(params) {
    try {
      yield put(requestProductItem());
      const response = yield call(fetchProductItem, params.id)
      yield put(requestProductItemSuccess(response.data));
    } catch (error) {
      yield put(requestProductItemError());
    }
  }

  export function* watchFetchProductItem() {
    yield takeEvery('FETCHED_PRODUCT_ITEM', fetchProductItemtAsync);
}