import React, {useContext} from 'react'
import HoverUserMenuStyle from './style';
import {Link} from "react-router-dom"
import { Context } from '../../../routes/productRoute';

const HoverUserMenu = () => {
    const {showModalForm, getProfileInfo} = useContext(Context)
    return (
        <HoverUserMenuStyle>
            <span onClick={showModalForm}>Add new product</span>
            <Link to='/user-page' onClick={getProfileInfo}>Profile</Link>
        </HoverUserMenuStyle>
    )
}
    
export default HoverUserMenu