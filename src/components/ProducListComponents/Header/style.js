import styled from 'styled-components'

const HeaderStyle = styled.header`
    width: 100%;
    background: white;
    padding-left: 5%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding: 0 0 10px 0;
        height: 80px;
    }
`;

export default HeaderStyle