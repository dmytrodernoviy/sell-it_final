export const logInRequest = (formValues) => {
    return ({type: "LOGIN_REQUEST", values: formValues})
}

export const logInSuccess = (data) => {
    return ({type: "LOGIN_SUCCESS", data: data})
}

export const logInError = (error) => {
    return ({type: "LOGIN_ERROR", payload: error})
}

export const registerRequest = (formValues) => {
    return ({type: "REGISTER_REQUEST", values: formValues})
}

export const registerSuccess = (data) => {
    return ({type: "REGISTER_SUCCESS", data: data})
}

export const registerError = (error) => {
    return ({type: 'REGISTER_ERROR', payload: error})
}

export const logOutRequest = () => {
    return ({type: "LOGOUT_REQUEST"})
}

export const logOut = () => {
    return ({type: "LOG_OUT"})
}

export const autoLoginRequest = (token) => {
    return ({type: 'AUTO_LOGIN_REQUEST', token: token})
}

export const getProfileInfo = () => {
    return ({type: "GET_PROFILE_INFO"})
}

export const getProfileInfoSuccess = (info) => {
    return ({type: "GET_PROFILE_INFO_SUCCESS", info: info})
}

export const getProfileInfoError = (error) => {
    return ({type: "GET_PROFILE_INFO_ERROR", error: error})
}