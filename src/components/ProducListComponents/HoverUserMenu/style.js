import styled from 'styled-components'

const HoverUserMenuStyle = styled.div`
    width: 75%;
    height: 40px;
    position: absolute;
    left: 0;
    bottom: -40px;
    background: #00b3be;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: none;
    border-bottom: 5px solid skyblue;
    :before {
        content: "";
        width: 5px;
        height: 100%;
        background: skyblue;
        position: absolute;
        left: 0;
    };

    span {
        position: relative;
        &:after {
        content: "";
        display: block;
        width: 3px;
        height: 100%;
        background: skyblue;
        position: absolute;
        right: -10%;
        top: 0;
        }
    }
`

export default HoverUserMenuStyle