import { fetchProductListTypes } from "../store-types/fetchProductList/actions-types";

interface ModalFormShow {
    isShowForm: boolean;
};

const initialState: ModalFormShow = {
    isShowForm: false
}

export default function showModal(
    state = initialState, 
    action: fetchProductListTypes): ModalFormShow {
    switch(action.type) {
        case "SHOW_MODAL_FORM":
            return {...state, isShowForm: true}
        case "CLOSE_MODAL_FORM": 
            return {...state, isShowForm: false}
        default:
            return state
    } 
}