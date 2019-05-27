import { ProductListState } from "../store-types/fetchProductList/interfaces-types";
import { fetchProductListTypes, 
            REQUESTED_PRODUCT_LIST,
            REQUESTED_PRODUCT_LIST_SUCCESS, 
            REQUESTED_PRODUCT_LIST_FAILURE, 
            FETCH_PRODUCT_SEARCH, 
            REQUEST_SEARCH_SUCCESS } 
from "../store-types/fetchProductList/actions-types";

const initialState: ProductListState = {
    isLoadingList: false,
    productList: [],
    error: false
}

export default function fetchProductListReducer(
    state = initialState, 
    action: fetchProductListTypes):ProductListState {
    switch(action.type) {
        case REQUESTED_PRODUCT_LIST: 
            return {...state, isLoadingList: true }
        case REQUESTED_PRODUCT_LIST_SUCCESS :
            return {...state, productList: action.productList, isLoadingList: false}
        case REQUESTED_PRODUCT_LIST_FAILURE :
            return {...state, isLoadingList: false, error: true}
        case FETCH_PRODUCT_SEARCH: 
            return {...state, isLoadingList: true }
        case REQUEST_SEARCH_SUCCESS :
            return {...state, productList: action.payload, isLoadingList: false}
        default:
            return state;
    }
}