import { REQUESTED_PRODUCT_LIST, 
            fetchProductListTypes, 
            REQUESTED_PRODUCT_LIST_SUCCESS, 
            REQUESTED_PRODUCT_LIST_FAILURE, 
            SHOW_MODAL_FORM, 
            CLOSE_MODAL_FORM, 
            REQUEST_SEARCH_SUCCESS, 
            FETCH_PRODUCT_SEARCH, 
            FETCHED_PRODUCT_LIST, 
            REQUEST_SEARCH_PRODUCT } 
from "../store-types/fetchProductList/actions-types";

import { ProductItem } from "../store-types/fetchProductList/interfaces-types";

export const requestProductList = ():fetchProductListTypes => {
    return { type: REQUESTED_PRODUCT_LIST}
};
  
export const requestProductListSuccess = (data: ProductItem[]):fetchProductListTypes => {
    return { type: REQUESTED_PRODUCT_LIST_SUCCESS, productList: data }
};
  
export const requestProductListError = ():fetchProductListTypes => {
    return { type: REQUESTED_PRODUCT_LIST_FAILURE }
};

export const showModalForm = ():fetchProductListTypes => {
    return { type: SHOW_MODAL_FORM}
}

export const closeModalForm = ():fetchProductListTypes => {
    return { type: CLOSE_MODAL_FORM}
}

export const requestSearchProduct = (val: string):fetchProductListTypes => {
    return {type: REQUEST_SEARCH_PRODUCT, val: val}
}

export const searchProductSuccess = (data: ProductItem[]):fetchProductListTypes => {
    return {type: REQUEST_SEARCH_SUCCESS, payload: data}
}

export const fetchProductSearch = ():fetchProductListTypes => {
    return {type: FETCH_PRODUCT_SEARCH}
}
  
export const fetchProductList = (page: number):fetchProductListTypes => {
    return { type: FETCHED_PRODUCT_LIST, number: page}
};