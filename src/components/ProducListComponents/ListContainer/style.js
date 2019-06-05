import styled from 'styled-components'

const ListContainerStyle = styled.div`
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 7vh;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    :before {
        content: "";
        width: 100vw;
        height: 100vh;
        display: block;
        position: fixed;
        z-index: -10;
        top: 0;
        left: 0;
        background: #CAC9C9;
    }
    h1 {
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        top: 15vh;
        font-size: 32px;
    }

    @media(max-width: 1280px) {
        max-width: 980px;
    }

    @media(max-width: 1024px) {
        max-width: 640px;
    }

    @media(max-width: 480px) {
        margin-top: 40px;
    }
`
export default ListContainerStyle