import React from 'react'
import HoverUserMenuStyle from './style';
import {connect} from 'react-redux'
import { showModalForm } from '../../../action-creators/productListActionCreator';
import {Link} from "react-router-dom"
import { getProfileInfo } from '../../../action-creators/authorize';

const mapStateToProps = state => ({
    productList: state.fetchProductListReducer.productList
})

const mapDispatchToProps = dispatch => ({
    showModalForm: () => {
        dispatch(showModalForm())
    },
    getProfileInfo: () => {
        dispatch(getProfileInfo())
    }
})

const HoverUserMenu = ({showModalForm, getProfileInfo}) =>
    <HoverUserMenuStyle>
        <span onClick={showModalForm}>Add new product</span>
        <Link to='/user-page' onClick={getProfileInfo}>Profile</Link>
    </HoverUserMenuStyle>

export default connect(mapStateToProps, mapDispatchToProps)(HoverUserMenu)