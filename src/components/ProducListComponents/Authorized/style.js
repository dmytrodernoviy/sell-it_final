import styled from 'styled-components'

const AuthorizedStyle = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            margin-right: 10px;
            height: 35px;
            width: 35px;
        }
    }
    img {
        cursor: pointer;
    }
`;

export default AuthorizedStyle