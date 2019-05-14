import { requestProductList,
         requestProductListSuccess,
         requestProductListError } from "../action-creators/productListActionCreator";
import {put, call, takeEvery} from 'redux-saga/effects'
import { fetchProduct } from "../api-client/productListRequest";

function* fetchProductListAsync() {
    try {
        yield put(requestProductList());
        const data = yield call(() => {
            return  fetchProduct()
                    .then(res => res.data.data)
            }
        );
            yield put(requestProductListSuccess(data));
    } catch (error) {
            yield put(requestProductListError());
    }
}

export function* watchFetchProductList() {
    yield takeEvery('FETCHED_PRODUCT_LIST', fetchProductListAsync);
}