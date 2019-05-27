import { SignUpForm, SignInForm } from "../store-types/formsTypes/forms-types";
import { AuthorizedTypes } from "../store-types/authorized/action-types";
import { Owner } from "../store-types/fetchProductList/interfaces-types";

export const logInRequest = (formValues: SignInForm):AuthorizedTypes => {
    return ({type: "LOGIN_REQUEST", values: formValues})
}

export const logInSuccess = (data: Owner):AuthorizedTypes => {
    return ({type: "LOGIN_SUCCESS", data: data})
}

export const logInError = (error: any):AuthorizedTypes => {
    return ({type: "LOGIN_ERROR", error: error})
}

export const registerRequest = (formValues: SignUpForm):AuthorizedTypes => {
    return ({type: "REGISTER_REQUEST", values: formValues})
}

export const registerSuccess = (data: Owner):AuthorizedTypes => {
    return ({type: "REGISTER_SUCCESS", data: data})
}

export const registerError = (error: any):AuthorizedTypes => {
    return ({type: 'REGISTER_ERROR', error: error})
}

export const logOutRequest = ():AuthorizedTypes => {
    return ({type: "LOGOUT_REQUEST"})
}

export const logOut = ():AuthorizedTypes => {
    return ({type: "LOG_OUT"})
}

export const autoLoginRequest = (token: string):AuthorizedTypes => {
    return ({type: 'AUTO_LOGIN_REQUEST', token: token})
}

export const getProfileInfo = ():AuthorizedTypes => {
    return ({type: "GET_PROFILE_INFO"})
}

export const getProfileInfoSuccess = (info: Owner):AuthorizedTypes => {
    return ({type: "GET_PROFILE_INFO_SUCCESS", info: info})
}

export const getProfileInfoError = (error: any):AuthorizedTypes => {
    return ({type: "GET_PROFILE_INFO_ERROR", error: error})
}