    
import {combineReducers} from 'redux'
import fetchProductItemReducer from './fetchProductItem'
import fetchProductListReducer from './fetchProductList'
import { reducer as formReducer } from 'redux-form'
import authorized from './authorized'
import showModal from './modalForm'

export const rootReducer = combineReducers({
    fetchProductItemReducer,
    fetchProductListReducer,
    authorized, 
    showModal,
    form: formReducer
})

export type AppState = ReturnType<typeof rootReducer>
