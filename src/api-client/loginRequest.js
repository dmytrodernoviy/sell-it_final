import {post} from './base'

export const loginRequest = (data) => post("login/", data)