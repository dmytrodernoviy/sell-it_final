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