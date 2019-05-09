import React from 'react'
import BlockButtonStyled from './style';
import Button from '../Button';
import {Link} from 'react-router-dom'

const SignBlockButton = () => 
        <BlockButtonStyled>
            <Link to="/login-page/sign-in">
                <Button title="Sign In" width="100%" />
            </Link>

            <Link to="/login-page/sign-up">
                <Button title="Sign Up" width="100%" />
            </Link>
        </BlockButtonStyled>

export default SignBlockButton