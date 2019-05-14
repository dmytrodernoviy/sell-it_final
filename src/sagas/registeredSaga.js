import { registeredError, logInSuccess } from "../action-creators/authorize";
import { put, call, takeEvery } from 'redux-saga/effects'
import { registeredRequest } from "../api-client/registeredRequest";
import {history} from '../App'

function* registeredAsync(formValues) {
try {
   const response = yield call(registeredRequest, formValues.values)
   if(response.statusText === "Created") {
        yield put(logInSuccess(response.data));
        localStorage.setItem("token", response.data.token)
        history.push("/")
    }
    
    } catch (error) {
        yield put(registeredError());
    }
}

export function* watchRegistered() {
    yield takeEvery('REGISTERED_REQUEST', registeredAsync);
}