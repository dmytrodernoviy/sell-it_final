export const requestProductList = () => {
    return { type: 'REQUESTED_PRODUCT_LIST' }
};
  
export const requestProductListSuccess = (data) => {
    return { type: 'REQUESTED_PRODUCT_LIST_SUCCESS', productList: data }
};
  
export const requestProductListError = () => {
    return { type: 'REQUESTED_PRODUCT_LIST_FAILURE' }
};

export const showModalForm = () => {
    return { type: "SHOW_MODAL_FORM"}
}

export const closeModalForm = () => {
    return { type: "CLOSE_MODAL_FORM"}
}

export const requestSearchProduct = (val) => {
    return {type: "REQUEST_SEARCH_PRODUCT", val: val}
}

export const searchProductSuccess = (data) => {
    return {type: "REQUEST_SEARCH_SUCCESS", payload: data}
}

export const fetchProductSearch = () => {
    return {type: "FETCH_PRODUCT_SEARCH"}
}
  
export const fetchProductList = () => {
    return { type: 'FETCHED_PRODUCT_LIST' }
};