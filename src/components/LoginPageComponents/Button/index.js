import React from 'react'
import StyledButton from './style';
import propTypes from 'prop-types'

const Button = ({title, width}) => 
    <StyledButton width = {width}>{title}</StyledButton>

Button.propTypes = {
    title: propTypes.string,
    width: propTypes.string
}

export default Button