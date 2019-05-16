import {post} from './base'

export const registerRequest = (data) => post("registration/", data)