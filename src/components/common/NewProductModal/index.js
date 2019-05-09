import React from 'react'
import NewProductStyle from './style';
import NewProductForm from '../NewProductForm';
import { closeModalForm } from '../../../action-creators/productListActionCreator';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    productList: state.fetchProductListReducer.productList
})

const mapDispatchToProps = dispatch => ({
    closeModalForm: () => {
        dispatch(closeModalForm())
    }
})

const NewProduct = ({closeModalForm}) =>
    <NewProductStyle>
        <div>
            <h2>Enter info for new product</h2>
            <NewProductForm />
        </div>
        <button id="close" onClick={closeModalForm}>Close</button>
    </NewProductStyle>

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)