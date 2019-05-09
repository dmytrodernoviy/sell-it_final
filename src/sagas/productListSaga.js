import { requestProductList,
         requestProductListSuccess,
         requestProductListError } from "../action-creators/productListActionCreator";
import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

function* fetchProductListAsync() {
    try {
        yield put(requestProductList());
        const data = yield call(() => {
            return axios.get("http://light-it-04.tk/api/posters/")
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