import styled from 'styled-components'

const NewProductFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70%;
    justify-content: space-between;
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
        margin: 0 auto;
    }
`

export default NewProductFormStyle