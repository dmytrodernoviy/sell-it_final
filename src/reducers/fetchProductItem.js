const initialState = {
    isLoadingItem: false,
    addProduct: {},
    productItem: {},
    error: false
}

export default function fetchProductItemReducer(state = initialState, action) {
    switch(action.type) {
        case "REQUESTED_PRODUCT_ITEM": 
            return {...state, isLoadingItem: true }
        case "REQUESTED_PRODUCT_ITEM_SUCCESS" :
            return {...state, productItem: action.productItem, isLoadingItem: false}
        case "REQUESTED_PRODUCT_ITEM_FAILURE" :
            return {...state, isLoadingItem: false, error: true}
        case "REQUEST_PRODUCT_ADD": 
            return {...state, isLoadingItem: true }
        case "REQUEST_PRODUCT_ADD_SUCCESS" :
            return {...state, addProduct: action.data, isLoadingItem: false}
        case "REQUEST_PRODUCT_ADD_ERROR" :
            return {...state, isLoadingItem: false, error: action.error}
        default:
            return state;
    }
}