import styled from 'styled-components'

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    input {
        width: 100%;
        background: transparent;
        position: relative;
        border: none;
        outline: none;
        border-bottom: 2px solid white;
        font-size: 18px;
        padding-left: 5%;
        color: white;
        &::placeholder {
            color: white;
        };
    };
    button {
        margin-top: 10px;
        position: relative;
        background: white;
        width: ${props => props.width};
        height: 35px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
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
    }
    span {
        color: red;
        font-size: 14px;
        margin-top: -10px;
        margin-left: 5%;
        font-weight: bold;
    }
`;

export default StyledForm