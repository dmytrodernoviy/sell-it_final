import styled from 'styled-components'

const NewProductStyle = styled.div`
    :before {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: #8C8787;
        opacity: 0.7;
        z-index: 10;
    }
    div {
        z-index: 15;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50vw;
        height: 90vh;
        background: #00b3be;
        text-align: center;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            color: white;
            font-size: 26px;
            margin-bottom: 40px;
        }
    }
    #close {
        position: fixed;
        right: 2%;
        top: 2%;
        z-index: 15;
        outline: 0;
        border: 0;
        font-size: 24px;
        color: #00b3be;
        border-radius: 5px;
        background: white;
    }
    @media(max-width: 1024px) {
        div {
            width: 75%;
        }
        
    }
`

export default NewProductStyle