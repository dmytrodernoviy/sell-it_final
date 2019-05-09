import React from 'react'
import StyledButton from './style';

const Button = ({title, width}) => 
    <StyledButton width = {width}>{title}</StyledButton>

export default Button