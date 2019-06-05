import {
         requestProductListSuccess,
         requestProductListError, 
         requestProductList} from "../action-creators/productListActionCreator";
import {put, call, takeEvery} from 'redux-saga/effects'
import { fetchProduct } from "../api-client/productAPI";

function* fetchProductListAsync(page) {
    try {
        yield put(requestProductList());
        const response = yield call(fetchProduct, page.number)
        yield put(requestProductListSuccess(response.data));
    } catch (error) {
        yield put(requestProductListError());
    }
}

export function* watchFetchProductList() {
    yield takeEvery('FETCHED_PRODUCT_LIST', fetchProductListAsync);
}