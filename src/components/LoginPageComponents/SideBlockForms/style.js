import styled from 'styled-components'

const BlockFormsStyled = styled.div`
    width: 30%;
    height: 100%;
    padding: 7vh 2vw;
    background: #00b3be;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    * {
        margin-bottom: 20px
    }
    div:first-child {
        margin-bottom: 7vh;
    }

    @media (max-width: 1024px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 50%;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 7vh 10vw;
    }
`

export default BlockFormsStyled