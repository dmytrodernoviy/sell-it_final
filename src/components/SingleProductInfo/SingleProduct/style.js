import styled from'styled-components'

const SingleProductStyle = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
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
    img {
        width: 300px;
        height: 200px;
        margin-right: 20px;
        border: 3px solid #00b3be;
        border-radius: 5px;
    }
    div {
        font-size: 20px;
        height: 200px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
    div span:last-child {
        color: #439400;
    }
    b {
        font-weight: bold;
    }
    @media(max-width: 768px) {
        img {
            margin: 0 auto 20px auto;
        }
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
    }
 `

export default SingleProductStyle