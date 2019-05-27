import { fetchProductItemTypes, 
            REQUESTED_PRODUCT_ITEM, 
            REQUESTED_PRODUCT_ITEM_SUCCESS, 
            REQUESTED_PRODUCT_ITEM_FAILURE, 
            FETCHED_PRODUCT_ITEM, 
            REQUEST_PRODUCT_ADD, 
            REQUEST_PRODUCT_ADD_SUCCESS, 
            REQUEST_PRODUCT_ADD_ERROR } 
from "../store-types/fetchProductItem/actions-types";

import { ProductItem } from "../store-types/fetchProductList/interfaces-types";
import { FormAddProduct } from "../store-types/formsTypes/forms-types";


export const requestProductItem = ():fetchProductItemTypes => {
    return { type: REQUESTED_PRODUCT_ITEM }
};
  
export const requestProductItemSuccess = (data: ProductItem):fetchProductItemTypes => {
    return { type: REQUESTED_PRODUCT_ITEM_SUCCESS, productItem: data }
};
  
export const requestProductItemError = ():fetchProductItemTypes => {
    return { type: REQUESTED_PRODUCT_ITEM_FAILURE }
};
  
export const fetchProductItem = (id: string):fetchProductItemTypes => {
    return { type: FETCHED_PRODUCT_ITEM, id: id }
};

export const requestProductAdd = (formValues: FormAddProduct):fetchProductItemTypes => {
    return {type: REQUEST_PRODUCT_ADD, values: formValues}
}

export const requestProductAddSuccess = (data: ProductItem):fetchProductItemTypes => {
    return {type: REQUEST_PRODUCT_ADD_SUCCESS, data: data}
}

export const requestProductAddError = (error: any):fetchProductItemTypes => {
    return {type: REQUEST_PRODUCT_ADD_ERROR, error: error}
}