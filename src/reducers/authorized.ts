import { AuthorizedState } from "../store-types/authorized/interfaces-types";
import { AuthorizedTypes, 
            LOGIN_REQUEST, 
            LOGIN_SUCCESS, 
            LOGIN_ERROR, 
            REGISTER_REQUEST, 
            REGISTER_SUCCESS, 
            REGISTER_ERROR, 
            LOG_OUT, 
            GET_PROFILE_INFO_SUCCESS, 
            GET_PROFILE_INFO_ERROR, 
            AUTO_LOGIN_REQUEST} 
from "../store-types/authorized/action-types";

const initialState: AuthorizedState = {
    isLogin: false,
    loading: false,
    loadingApp: false,
    errorLogin: null,
    errorRegister: null,
    userData: {}
}

export default function authorized(
    state = initialState,
    action: AuthorizedTypes):AuthorizedState {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, isLogin: false, loading: true}
        case LOGIN_SUCCESS:
            return {...state, isLogin: true, errorLogin: null, userData: action.data || action.data, loading: false, loadingApp: false}
        case LOGIN_ERROR:
            return {...state, isLogin: false, errorLogin: action.error, errorRegister: null, userData: {}, loading: false, loadingApp: false }
        case AUTO_LOGIN_REQUEST: 
            return {...state, loading: true, loadingApp: true}
        case REGISTER_REQUEST:
            return {...state, isLogin: false, loading: true}
        case REGISTER_SUCCESS:
            return {...state, isLogin: true, errorRegister: null, userData: action.data, loading: false }
        case REGISTER_ERROR:
            return {...state, isLogin: false, errorLogin: null, errorRegister: action.error, userData: {}, loading: false }
        case LOG_OUT: 
            return {...state, isLogin: false, userData: {}, errorLogin: null, errorRegister: null}
        case GET_PROFILE_INFO_SUCCESS:
            return {...state, userData: action.info}
        case GET_PROFILE_INFO_ERROR:
            return {...state, errorLogin: action.error}
        default: 
            return state
    } 
}