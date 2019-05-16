import React from 'react'
import HeaderInputStyle from './style';
import {connect} from 'react-redux';
import { requestSearchProduct } from '../../../action-creators/productListActionCreator';

const mapStateToProps = state => ({
    productList: state.fetchProductListReducer.productList
})

const mapDispatchToProps = dispatch => ({
    findProduct: (e) => {
        dispatch(requestSearchProduct(e))
    } 
})

const HeaderSearch = ({findProduct}) => 
    <HeaderInputStyle type="text" 
                      placeholder="Try find something" 
                      onChange={(e) => findProduct(e.target.value)}/>

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)