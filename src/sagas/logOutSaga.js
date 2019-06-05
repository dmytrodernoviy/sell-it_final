import {put, call, takeEvery} from 'redux-saga/effects'
import {history} from '../store'
import { logOutRequest } from '../api-client/userAPI';
import { logOut } from '../action-creators/authorize';

function* logOutAsync() {
    try {
        const response = yield call(logOutRequest)
        if(response.status === 200) {
            yield put(logOut())
            localStorage.clear()
            history.push("/login-page")
        } 

        } catch (error) {
           history.push("/")
        }
}

export function* watchLogOut() {
    yield takeEvery('LOGOUT_REQUEST', logOutAsync);
}