import { logError, logInSuccess } from "../action-creators/authorize";
import {put, call, takeEvery} from 'redux-saga/effects'
import {history} from '../App'
import { requestWithHeaders } from "../api-client/requestToken";

function* autoLoginAsync(token) {
    try {
        const response = yield call(requestWithHeaders, token)
        console.log(response)
        } catch (error) {
            yield put(console.log(error));
        }
}

export function* watchAutoLogin() {
    yield takeEvery('AUTO_LOGIN_REQUEST', autoLoginAsync);
}
