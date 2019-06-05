import React from 'react'
import BlockFormsStyled from './style';
import SignBlockButton from '../SignBlockButton';
import SignInForm from '../SignInForm';
import SellIt from '../SellIt';
import SignUpForm from '../SignUpForm';
import propTypes from 'prop-types'
import LoginPreloader from '../../common/LoginPreloader';

const SideBlockForms = ({sign, loading}) =>
    <BlockFormsStyled>
        <SellIt />
        {loading
            ? <LoginPreloader />
            : <React.Fragment>
                <SignBlockButton />
                {(sign === "sign-in")
                ? <SignInForm /> 
                : <SignUpForm />}
            </React.Fragment>  
        }

    </BlockFormsStyled>

SideBlockForms.propTypes = {
    sign: propTypes.string,
    loading: propTypes.bool
}

export default SideBlockForms