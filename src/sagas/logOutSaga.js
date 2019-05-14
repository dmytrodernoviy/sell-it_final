import {put, call, takeEvery} from 'redux-saga/effects'
import {history} from '../App'
import { logOutRequest } from '../api-client/logOutRequest';
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
            yield put(console.log("error"));
        }
}

export function* watchLogOut() {
    yield takeEvery('LOGOUT_REQUEST', logOutAsync);
}