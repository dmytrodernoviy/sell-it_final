import { logInSuccess } from "../action-creators/authorize";
import {put, call, takeEvery} from 'redux-saga/effects'
import {history} from '../App'
import { requestWithHeaders } from "../api-client/requestToken";

function* autoLoginAsync(token) {
    try {
        const response = yield call(requestWithHeaders, token.token)
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
