import React from 'react'
import BlockFormsStyled from './style';
import SignBlockButton from '../SignBlockButton';
import SignInForm from '../SignInForm';
import SellIt from '../SellIt';
import SignUpForm from '../SignUpForm';

const SideBlockForms = ({sign}) =>
    <BlockFormsStyled>
        <SellIt />
        <SignBlockButton />
        {(sign === "sign-in")
                ? <SignInForm /> 
                : <SignUpForm />}
    </BlockFormsStyled>

export default SideBlockForms