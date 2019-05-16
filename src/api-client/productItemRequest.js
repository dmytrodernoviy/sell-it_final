import { get } from "./base";

export const fetchProductItem = (path) => get(`posters/${path}`)
export const searchProduct = (val) => get(`/posters/?search=${val}`)