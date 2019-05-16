const initialState = {
    isLogin: false,
    errorLogin: null,
    errorRegister: null,
    userData: {}
}

export default function authorized(state = initialState, action) {
    switch(action.type) {
        case "LOGIN_REQUEST":
            return {...state, isLogin: false}
        case "LOGIN_SUCCESS":
            return {...state, isLogin: true, errorLogin: null, userData: action.data.user || action.data}
        case "LOGIN_ERROR":
            return {...state, isLogin: false, errorLogin: action.payload, errorRegister: null, userData: {} }
        case "REGISTER_REQUEST":
            return {...state, isLogin: false}
        case "REGISTER_SUCCESS":
            return {...state, isLogin: true, errorRegister: null, userData: action.data.user }
        case "REGISTER_ERROR":
            return {...state, isLogin: false, errorLogin: null, errorRegister: action.payload, userData: {} }
        case "LOG_OUT": 
            return {...state, isLogin: false, userData: {}, errorLogin: null, errorRegister: null}
        default: 
            return state
    } 
}