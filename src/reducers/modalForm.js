const initialState = {
    isShowForm: false
}

export default function showModal(state = initialState, action) {
    switch(action.type) {
        case "SHOW_MODAL_FORM":
            return {...state, isShowForm: true}
        case "CLOSE_MODAL_FORM": 
            return {...state, isShowForm: false}
        default:
            return state
    } 
}