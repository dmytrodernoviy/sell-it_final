import React from 'react'
import AuthorizedStyle from './style';
import UserPhoto from '../../../assets/img/user-img.png'
import FaSignOut from '../../../assets/img/fa-sign-out.png'
import {Link} from 'react-router-dom'
 
const Authorized = () =>    
    <AuthorizedStyle>
        <div>
            <img src={UserPhoto} alt="UserPhoto"></img>
            <span>User Name</span>
        </div>
        <Link to="/login-page/sign-in">
            <img src={FaSignOut} alt="FaSearch"/>
        </Link>
    </AuthorizedStyle>

export default Authorized