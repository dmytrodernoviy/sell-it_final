import { SignUpForm, SignInForm } from "../formsTypes/forms-types";
import { Owner } from "../fetchProductList/interfaces-types";

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOG_OUT = "LOG_OUT"
export const AUTO_LOGIN_REQUEST = 'AUTO_LOGIN_REQUEST'
export const GET_PROFILE_INFO = 'GET_PROFILE_INFO'
export const GET_PROFILE_INFO_SUCCESS = 'GET_PROFILE_INFO_SUCCESS'
export const GET_PROFILE_INFO_ERROR = 'GET_PROFILE_INFO_ERROR'


interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    values: SignInForm;
}

interface LoginSucces {
    type: typeof LOGIN_SUCCESS;
    data: Owner;
}

interface LoginError {
    type: typeof LOGIN_ERROR;
    error: any;
}

interface RegisterRequest {
    type: typeof REGISTER_REQUEST;
    values: SignUpForm;
}

interface RegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    data: Owner;
}

interface RegisterError {
    type: typeof REGISTER_ERROR;
    error: any;
}

interface LogOutRequest {
    type: typeof LOGOUT_REQUEST;
}

interface LogOut {
    type: typeof LOG_OUT;
}

interface AutoLoginRequest {
    type: typeof AUTO_LOGIN_REQUEST;
    token: string;
}

interface GetProfileInfo {
    type: typeof GET_PROFILE_INFO;
}

interface GetProfileInfoSuccess {
    type: typeof GET_PROFILE_INFO_SUCCESS;
    info: Owner;
}

interface GetProfileInfoError {
    type: typeof GET_PROFILE_INFO_ERROR;
    error: any;
}

export type AuthorizedTypes = LoginRequest
    | LoginSucces
    | LoginError
    | RegisterRequest
    | RegisterSuccess
    | RegisterError
    | LogOutRequest
    | LogOut
    | AutoLoginRequest
    | GetProfileInfo
    | GetProfileInfoSuccess
    | GetProfileInfoError

