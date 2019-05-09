import styled from 'styled-components'

import FaSearch from '../../../assets/img/fa-search.png'

const HeaderInputStyle = styled.input`
    background: url(${FaSearch}) no-repeat left;
    color: #4a4a4a;
    padding-left: 15px;
    width: 30%;
    position: relative;
    font-size: 14px;
    outline: 0;
    border: 0;
    border-bottom: 2px solid #00b3be;
    img {
        position: absolute;
    };
    &::placeholder {
        color: black;
    };

    @media (max-width: 480px) {
        font-size: 20px;
        width: 70%;
    }
`;

export default HeaderInputStyle