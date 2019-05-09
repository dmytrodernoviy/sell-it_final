const initialState = {
    isLoadingList: false,
    productList: [],
    error: false
}

export default function fetchProductListReducer(state = initialState, action) {
    switch(action.type) {
        case "REQUESTED_PRODUCT_LIST": 
            return {...state, isLoadingList: true }
        case "REQUESTED_PRODUCT_LIST_SUCCESS" :
            return {...state, productList: action.productList, isLoadingList: false}
        case "REQUESTED_PRODUCT_LIST_FAILURE" :
            return {...state, isLoadingList: false, error: true}
        default:
            return state;
    }
}