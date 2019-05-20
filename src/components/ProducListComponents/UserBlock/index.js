import React from 'react'
import UserBlockStyle from './style';
import Authorized from '../Authorized';
import HoverUserMenu from '../HoverUserMenu';

const UserBlock = () => 
    <UserBlockStyle>
        <Authorized />
        <HoverUserMenu />
    </UserBlockStyle>

export default UserBlock