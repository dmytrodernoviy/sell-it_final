import styled from 'styled-components'

const HeaderStyle = styled.header`
    width: 100%;
    background: white;
    height: 55px;
    padding-left: 40px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: .95;
    border-bottom: 2px solid #00b3be;
    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding: 0 0 10px 0;
        height: 80px;
    }
`;

export default HeaderStyle