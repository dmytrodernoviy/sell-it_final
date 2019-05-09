const initialState = '';

export default function filterProducts(state = initialState, action) {
    switch(action.type) {
        case "FIND_PRODUCT":
            return action.payload
        default: 
            return state
    }
}