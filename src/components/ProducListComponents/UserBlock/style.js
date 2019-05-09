import styled from 'styled-components'

const UserBlockStyle = styled.div`
    width: 30%;
    height: 50px;
    background: #00b3be;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    :hover div:nth-child(2),
    &:hover:before{
        display: flex;
    }
    a {
        text-decoration: none;
        color: white;
    }
    span {
        cursor: pointer;
    }
    :before {
        content: "";
        display: none;
        width: 5px;
        height: 100%;
        background: skyblue;
        position: absolute;
        left: 0;
    }
    @media (max-width: 1024px) {
        width: 38%
    }

    @media(max-width: 768px) {
        width: 50%;
    }

    @media(max-width: 480px) {
        width: 100%;
    }
`;

export default UserBlockStyle