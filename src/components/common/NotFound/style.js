import styled from 'styled-components'

const NotFoundStyle = styled.div`
    text-align: center;
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
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 28px;
    }
`

export default NotFoundStyle