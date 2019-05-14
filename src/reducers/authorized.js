const initialState = {
    isLogin: false,
    errorLogin: null,
    errorRegister: null,
    userData: {}
}

export default function authorized(state = initialState, action) {
    switch(action.type) {
        case "AUTO_LOGIN_REQUEST": 
            return {...state, isLogin: false}
        case "AUTO_LOGIN_SUCCESS": 
            return {...state, isLogin: true, userData: action.data}
        case "LOGIN_REQUEST":
            return {...state, isLogin: false}
        case "LOG_IN_SUCCESS":
            return {...state, isLogin: true, errorLogin: null, userData: action.data.user }
        case "LOG_OUT": 
            return {...state, isLogin: false, userData: {}, errorLogin: null, errorRegister: null}
        case "LOG_ERROR":
            return {...state, errorLogin: action.payload, errorRegister: null}
        case "REGISTERED_ERROR": 
            return {...state, errorRegister: action.payload, errorLogin: null}
        default: 
            return state
    } 
}