import {headersRequest} from './base'

export const requestWithHeaders = (token) => headersRequest("GET", "profile/", token)