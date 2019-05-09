import styled from 'styled-components'

const NotAuthorizedStyle = styled.div`
    color: white;
    font-size: 18px;
    a {
        color: #4a4a4a;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }

    @media(max-width: 480px) {
        font-size: 24px;
    }
`;

export default NotAuthorizedStyle