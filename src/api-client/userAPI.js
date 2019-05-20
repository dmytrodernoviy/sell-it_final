import {post} from './base'
import {headersRequest} from './base'

export const requestWithHeaders = (data = null, token) => headersRequest("GET", "profile/", data, token)
export const requestProductAdd = (data, token) => headersRequest("POST", "posters/", data, token)
export const requestProductInfo = (data, token) => headersRequest("GET", "profile/", data, token)

export const logInRequest = (data) => post("login/", data)
export const logOutRequest = () => post("logout/")
export const registerRequest = (data) => post("registration/", data)