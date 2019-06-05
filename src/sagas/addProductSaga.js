
import {put, call, takeEvery} from 'redux-saga/effects'
import {history} from "../store"
import { requestProductAddSuccess, requestProductAddError } from '../action-creators/productItemActionCreator';
import { requestProductAdd } from '../api-client/userAPI';

function* fetchProductAddAsync(formValues) {
    try {
        const token = localStorage.getItem("token")
        const response = yield call(requestProductAdd, formValues.values, token)
        if(response.statusText === "OK") {
            yield put(requestProductAddSuccess(response.data))
            history.push("/")
        }

        } catch (error) {
            yield put(requestProductAddError(error.response));
        }
    }

export function* watchRequestProductAdd() {
    yield takeEvery('REQUEST_PRODUCT_ADD', fetchProductAddAsync);
}