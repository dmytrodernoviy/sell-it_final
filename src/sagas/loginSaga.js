import { logError, logInSuccess } from "../action-creators/authorize";
import {put, call, takeEvery} from 'redux-saga/effects'
import { loginRequest } from "../api-client/loginRequest";
import {history} from '../App'

function* loginAsync(formValues) {
    try {
        const response = yield call(loginRequest, formValues.values)
        if(response.statusText === "OK") {
            yield put(logInSuccess(response.data));
            localStorage.setItem("token", response.data.token)
            history.push("/")
        } 

        } catch (error) {
            yield put(logError());
        }
}

export function* watchLogIn() {
    yield takeEvery('LOGIN_REQUEST', loginAsync);
}
