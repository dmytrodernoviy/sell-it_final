import { watchFetchProductList } from "./productListSaga";
import { watchFetchProductItem } from "./productItemSaga";
import { all } from 'redux-saga/effects'
import { watchLogIn } from "./loginSaga";
import { watchRegistered } from "./registeredSaga";
import { watchLogOut } from "./logOutSaga";
import { watchAutoLogin } from "./autoLoginSaga";

export function * rootSaga() {
    yield all([
      watchFetchProductList(),
      watchFetchProductItem(),
      watchLogIn(),
      watchLogOut(),
      watchRegistered(),
      watchAutoLogin()
    ])
  }