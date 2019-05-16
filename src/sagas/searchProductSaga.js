import {put, call, takeEvery} from 'redux-saga/effects'
import { searchProduct } from "../api-client/productItemRequest";
import { fetchProductSearch, searchProductSuccess } from '../action-creators/productListActionCreator';


function* fetchProductItemtAsync(val) {
    try {
        yield put(fetchProductSearch());
        const response = yield call(searchProduct, val.val);
 
        yield put(searchProductSuccess(response.data.data));
    } catch (error) {
       console.log(error)
    }
}

export function* watchSearchProduct(val) {
yield takeEvery('REQUEST_SEARCH_PRODUCT', fetchProductItemtAsync);
}