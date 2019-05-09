const initialState = {
    isLoadingItem: false,
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
        default:
            return state;
    }
}