import { getProfileInfoSuccess, getProfileInfoError } from "../action-creators/authorize";
import {put, call, takeEvery} from 'redux-saga/effects'
import { requestProductInfo } from "../api-client/userAPI";

function* getProfileInfoAsync() {
    try {
        const token = localStorage.getItem("token")
        const response = yield call(requestProductInfo, null, token)
        yield put(getProfileInfoSuccess(response.data));
        } catch (error) {
            yield put(getProfileInfoError(error.response))
        }
}

export function* watchGetProfileInfo() {
    yield takeEvery('GET_PROFILE_INFO', getProfileInfoAsync);
}
