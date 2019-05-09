import { requestProductItem,
         requestProductItemSuccess, 
         requestProductItemError } from "../action-creators/productItemActionCreator";
import {put, call, takeEvery} from 'redux-saga/effects'
import axios from "axios"

function* fetchProductItemtAsync(params) {
    try {
      yield put(requestProductItem());
      const data = yield call(() => {
        return axios.get(`http://light-it-04.tk/api/posters/${params.id}`)
                .then(res => res.data)
        }
      );
      yield put(requestProductItemSuccess(data));
    } catch (error) {
      yield put(requestProductItemError());
    }
  }

  export function* watchFetchProductItem(id) {
    yield takeEvery('FETCHED_PRODUCT_ITEM', fetchProductItemtAsync);
}