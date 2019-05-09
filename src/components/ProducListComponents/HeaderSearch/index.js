import React from 'react'
import HeaderInputStyle from './style';
import {connect} from 'react-redux';
import { findProduct } from '../../../action-creators/findProduct';

const mapStateToProps = state => ({
    productList: state.fetchProductListReducer.productList
})

const mapDispatchToProps = dispatch => ({
    findProduct: (e) => {
        dispatch(findProduct(e))
    } 
})

const HeaderSearch = ({productList, findProduct}) => 
    <HeaderInputStyle type="text" 
                      placeholder="Try find something" 
                      onChange={(e) => findProduct(e.target.value)}/>

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)