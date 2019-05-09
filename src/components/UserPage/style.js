import styled from 'styled-components'

const UserPageStyle = styled.div`
    background-color: #a39e9e;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 40%;
        height: 90%;
        background: #00b3be;
        color: white;
        font-size: 22px;
        border-radius: 20px;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        span {
            margin-bottom: 15px;
        }
    }
    .user-photo {
        width: 170px;
        height: 170px;
        background: url(http://iephb.ru/wp-content/themes/iephb/images/default_user.png) no-repeat center;
        background-size: cover;
        border-radius: 30%;
        margin-bottom: 30px;
    }
    @media(max-width: 1024px) {
        div {
            width: 60%;
        }
    }
    @media(max-width: 768px) {
        div {
            width: 75%;
        }
    }
`
export default UserPageStyle