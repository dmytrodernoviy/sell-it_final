import axios from "axios";

const API_URL = "http://light-it-04.tk/api/"

const request = (method, path, data) => {
    return axios({
        method: method,
        url: `${API_URL}${path}`,
        data: data
    })
}

export const headersRequest = (method, path, data, token) => {
	return axios({
		method: method,
		url: `${API_URL}${path}`,
		data: data,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'JWT ' + token,
		},
	})
}

export const get = (path) => request("GET", path);
export const post = (path, data) => request("POST", path, data)


