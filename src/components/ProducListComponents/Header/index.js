import React from 'react'
import LogoSell from '../LogoSell';
import HeaderSearch from '../HeaderSearch';
import UserBlock from '../UserBlock';
import HeaderStyle from './style'
import {Link} from 'react-router-dom'

const Header = () => 
    <HeaderStyle>
        <Link to="/">
            <LogoSell />
        </Link>
        <HeaderSearch/>
        <UserBlock />
    </HeaderStyle>

export default Header