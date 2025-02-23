import { logInError, logInSuccess } from "../action-creators/authorize";
import {put, call, takeEvery} from 'redux-saga/effects'
import { logInRequest } from "../api-client/userAPI";
import {history} from '../store'

function* loginAsync(formValues) {
    try {
        const response = yield call(logInRequest, formValues.values)
        if(response.statusText === "OK") {
            yield put(logInSuccess(response.data.user));
            localStorage.setItem("token", response.data.token)
            history.push("/")
        } 

        } catch (error) {
            yield put(logInError(error.response.data));
        }
}

export function* watchLogIn() {
    yield takeEvery('LOGIN_REQUEST', loginAsync);
}
