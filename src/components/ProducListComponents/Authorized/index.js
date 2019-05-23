import React, {useContext} from 'react'
import AuthorizedStyle from './style';
import UserPhoto from '../../../assets/img/user-img.png'
import FaSignOut from '../../../assets/img/fa-sign-out.png'
import {Context} from '../../../routes/productRoute'
 
const Authorized = () => {
    const {logOut, authorized} = useContext(Context)
    return (
        <AuthorizedStyle>
            <div>
                <img src={UserPhoto} alt="UserPhoto"></img>
                <span>{authorized.userData.username}</span>
            </div>
            <img src={FaSignOut} alt="FaSearch" onClick={logOut}/>
        </AuthorizedStyle>
    )
}
            
export default Authorized