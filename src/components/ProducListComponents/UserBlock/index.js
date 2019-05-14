import React from 'react'
import UserBlockStyle from './style';
import Authorized from '../Authorized';
import HoverUserMenu from '../HoverUserMenu';

const UserBlock = ({logOut, authorized}) => 
    <UserBlockStyle>
        <Authorized logOut={logOut} authorized={authorized}/>
        <HoverUserMenu />
    </UserBlockStyle>

export default UserBlock