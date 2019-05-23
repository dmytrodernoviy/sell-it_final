import React, {lazy, Suspense} from 'react'
import NewProductStyle from './style';
import { closeModalForm } from '../../../action-creators/productListActionCreator';
import {connect} from 'react-redux'

const NewProductForm = lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(
        () => import("../NewProductForm")
    )
})

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
            <Suspense fallback={<h1>Loading...</h1>}>
                <h2>Enter info for new product</h2>
                <NewProductForm />
            </Suspense>
        </div>
        <button id="close" onClick={closeModalForm}>Close</button>
    </NewProductStyle>

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)