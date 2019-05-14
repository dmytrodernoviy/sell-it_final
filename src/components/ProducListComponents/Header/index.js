import React from 'react'
import LogoSell from '../LogoSell';
import HeaderSearch from '../HeaderSearch';
import UserBlock from '../UserBlock';
import HeaderStyle from './style'
import {Link} from 'react-router-dom'

const Header = ({logOut, authorized}) => 
    <HeaderStyle>
        <Link to="/">
            <LogoSell />
        </Link>
        <HeaderSearch/>
        <UserBlock logOut={logOut} authorized={authorized}/>
    </HeaderStyle>

export default Header