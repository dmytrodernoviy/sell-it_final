import { registerError, registerSuccess } from "../action-creators/authorize";
import { put, call, takeEvery } from 'redux-saga/effects'
import { registerRequest } from "../api-client/userAPI";
import {history} from '../App'

function* registeredAsync(formValues) {
try {
   const response = yield call(registerRequest, formValues.values)
   if(response.statusText === "Created") {
        yield put(registerSuccess(response.data.user));
        localStorage.setItem("token", response.data.token)
        history.push("/")
    }
    
    } catch (error) {
        yield put(registerError(error.response.data));
    }
}

export function* watchRegistered() {
    yield takeEvery('REGISTER_REQUEST', registeredAsync);
}