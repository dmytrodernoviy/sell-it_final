export const logInSuccess = (data) => {
    return ({type: "LOG_IN_SUCCESS", data: data})
}

export const logOut = () => {
    return ({type: "LOG_OUT"})
}

export const logError = () => {
    return ({type: "LOG_ERROR", payload: "Invalid login or email"})
}

export const registeredError = () => {
    return ({type: 'REGISTERED_ERROR', payload: "Registered is failed"})
}

export const loginRequest = (formValues) => {
    return ({type: "LOGIN_REQUEST", values: formValues})
}

export const registeredRequest = (formValues) => {
    return ({type: "REGISTERED_REQUEST", values: formValues})
}

export const logOutRequest = () => {
    return ({type: "LOGOUT_REQUEST"})
}

export const autoLoginRequest = (token) => {
    return ({type: 'AUTO_LOGIN_REQUEST', token: token})
}

export const autoLoginSuccess = (data) => {
    return ({type: "AUTO_LOGIN_SUCCESS", data: data})
}