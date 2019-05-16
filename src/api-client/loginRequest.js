import {post} from './base'

export const logInRequest = (data) => post("login/", data)