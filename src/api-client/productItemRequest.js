import { get } from "./base";

export const fetchProductItem = (path) => get(`posters/${path}`)