export const requestProductItem = () => {
    return { type: 'REQUESTED_PRODUCT_ITEM' }
};
  
export const requestProductItemSuccess = (data) => {
    return { type: 'REQUESTED_PRODUCT_ITEM_SUCCESS', productItem: data }
};
  
export const requestProductItemError = () => {
    return { type: 'REQUESTED_PRODUCT_ITEM_FAILURE' }
};
  
export const fetchProductItem = (id) => {
    return { type: 'FETCHED_PRODUCT_ITEM', id: id }
};

export const requestProductAdd = (formValues) => {
    return {type: "REQUEST_PRODUCT_ADD", values: formValues}
}

export const requestProductAddSuccess = (data) => {
    return {type: "REQUEST_PRODCUT_ADD_SUCCESS", data: data}
}

export const requestProductAddError = (error) => {
    return {type: "REQUEST_PRODUCT_ADD_ERROR", error: error}
}