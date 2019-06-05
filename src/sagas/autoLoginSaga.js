import { logInSuccess } from "../action-creators/authorize";
import {put, call, takeEvery} from 'redux-saga/effects'
import {history} from '../store'
import { requestWithHeaders } from "../api-client/userAPI";

function* autoLoginAsync(token) {
    try {
        const response = yield call(requestWithHeaders, null, token.token)
        if(response.statusText === "OK") {
            yield put(logInSuccess(response.data));
            history.push("/")
        } 

        } catch (error) {
            localStorage.clear()
            history.push("/login-page")
        }
}

export function* watchAutoLogin() {
    yield takeEvery('AUTO_LOGIN_REQUEST', autoLoginAsync);
}
