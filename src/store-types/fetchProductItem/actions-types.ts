import { ProductItem } from "../fetchProductList/interfaces-types";
import { FormAddProduct } from "../formsTypes/forms-types";

export const REQUESTED_PRODUCT_ITEM = 'REQUESTED_PRODUCT_ITEM'
export const REQUESTED_PRODUCT_ITEM_SUCCESS = 'REQUESTED_PRODUCT_ITEM_SUCCESS'
export const REQUESTED_PRODUCT_ITEM_FAILURE = 'REQUESTED_PRODUCT_ITEM_FAILURE'
export const FETCHED_PRODUCT_ITEM = 'FETCHED_PRODUCT_ITEM'
export const REQUEST_PRODUCT_ADD = 'REQUEST_PRODUCT_ADD'
export const REQUEST_PRODUCT_ADD_SUCCESS = 'REQUEST_PRODUCT_ADD_SUCCESS'
export const REQUEST_PRODUCT_ADD_ERROR = 'REQUEST_PRODUCT_ADD_ERROR'

interface RequestedProductItem {
    type: typeof REQUESTED_PRODUCT_ITEM;
};

interface RequestedProductItemSuccess {
    type: typeof REQUESTED_PRODUCT_ITEM_SUCCESS;
    productItem: ProductItem;
};

interface RequestedProductItemError {
    type: typeof REQUESTED_PRODUCT_ITEM_FAILURE;
};

interface FetchedProductItem {
    type: typeof FETCHED_PRODUCT_ITEM;
    id: string;
};

interface RequestProductAdd {
    type: typeof REQUEST_PRODUCT_ADD;
    values: FormAddProduct;
}

interface RequestProductAddSuccess {
    type: typeof REQUEST_PRODUCT_ADD_SUCCESS
    data: ProductItem;
}

interface RequestProductAddError {
    type: typeof REQUEST_PRODUCT_ADD_ERROR;
    error: any;
}

export type fetchProductItemTypes = RequestedProductItem
    | RequestedProductItemSuccess
    | RequestedProductItemError
    | FetchedProductItem
    | RequestProductAdd
    | RequestProductAddSuccess
    | RequestProductAddError