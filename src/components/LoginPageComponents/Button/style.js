import styled from 'styled-components'

const StyledButton = styled.button`
    background: white;
    width: ${props => props.width};
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    &:after {
        content: "";
        display: none;
        width: 100%;
        height: 10%;
        background: #91d763;
        position: absolute;
        left: 0;
        bottom: 0;
    };
    &:hover:after {
        display: block;
    }
`;

export default StyledButton