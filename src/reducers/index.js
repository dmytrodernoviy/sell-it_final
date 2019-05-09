    
import {combineReducers} from 'redux'
import fetchProductItemReducer from '../reducers/fetchProductItem'
import fetchProductListReducer from '../reducers/fetchProductList'
import { reducer as formReducer } from 'redux-form'
import filterProducts from './filterProductReducer'
import authorized from './authorized'
import showModal from './modalForm'

export default combineReducers({
    fetchProductItemReducer,
    fetchProductListReducer,
    filterProducts,
    authorized, 
    showModal,
    form: formReducer
})
