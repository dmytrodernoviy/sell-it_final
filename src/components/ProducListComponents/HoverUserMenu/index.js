import React from 'react'
import HoverUserMenuStyle from './style';
import {connect} from 'react-redux'
import { showModalForm } from '../../../action-creators/productListActionCreator';
import {Link} from "react-router-dom"

const mapStateToProps = state => ({
    productList: state.fetchProductListReducer.productList
})

const mapDispatchToProps = dispatch => ({
    showModalForm: () => {
        dispatch(showModalForm())
    }
})

const HoverUserMenu = ({showModalForm}) =>
    <HoverUserMenuStyle>
        <span onClick={showModalForm}>Add new product</span>
        <Link to="/user-page">Profile</Link>
    </HoverUserMenuStyle>

export default connect(mapStateToProps, mapDispatchToProps)(HoverUserMenu)