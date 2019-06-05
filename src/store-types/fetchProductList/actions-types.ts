import { ProductItem } from "./interfaces-types";

export const REQUESTED_PRODUCT_LIST = "REQUESTED_PRODUCT_LIST"
export const REQUESTED_PRODUCT_LIST_SUCCESS = "REQUESTED_PRODUCT_LIST_SUCCESS"
export const REQUESTED_PRODUCT_LIST_FAILURE = "REQUESTED_PRODUCT_LIST_FAILURE"
export const SHOW_MODAL_FORM = "SHOW_MODAL_FORM"
export const CLOSE_MODAL_FORM = "CLOSE_MODAL_FORM"
export const REQUEST_SEARCH_PRODUCT = "REQUEST_SEARCH_PRODUCT"
export const REQUEST_SEARCH_SUCCESS = "REQUEST_SEARCH_SUCCESS" 
export const FETCH_PRODUCT_SEARCH = "FETCH_PRODUCT_SEARCH"
export const FETCHED_PRODUCT_LIST = "FETCHED_PRODUCT_LIST"

interface RequestedProductList {
    type: typeof REQUESTED_PRODUCT_LIST
};

interface RequestedProductListSuccess {
    type: typeof REQUESTED_PRODUCT_LIST_SUCCESS;
    productList: ProductItem[];
};

interface RequestedProductListFailure {
    type: typeof REQUESTED_PRODUCT_LIST_FAILURE;
};

interface ShowModalForm {
    type: typeof SHOW_MODAL_FORM;
};

interface CloseModalForm {
    type: typeof CLOSE_MODAL_FORM;
};

interface RequestSearchProduct {
    type: typeof REQUEST_SEARCH_PRODUCT;
    val: string;
};

interface RequestSearchSuccess {
    type: typeof REQUEST_SEARCH_SUCCESS;
    payload: ProductItem[]
}

interface FetchProductSearch {
    type: typeof FETCH_PRODUCT_SEARCH
}

interface FetchProductList {
    type: typeof FETCHED_PRODUCT_LIST,
    number: number
}

export type fetchProductListTypes = RequestedProductList
    | RequestedProductListSuccess
    | RequestedProductListFailure
    | ShowModalForm
    | CloseModalForm
    | RequestSearchProduct
    | RequestSearchSuccess
    | FetchProductSearch
    | FetchProductList