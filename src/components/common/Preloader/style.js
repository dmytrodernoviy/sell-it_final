import styled from 'styled-components'

const PreloaderStyle = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
    position: fixed;
    background: #CAC9C9;
    z-index: -10;
    & .caption {
        margin: 0 auto;
    }
    .cube-loader {
        width: 73px;
        height: 73px;
        margin: 0 auto;
        position: relative;
        transform: rotateZ(45deg);

        & .cube {
        position: relative;
        transform: rotateZ(45deg);
        width: 50%;
        height: 50%;
        float: left;
        transform: scale(1.1);
        }
        & .cube:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00b3be;
        animation: cube-loader 2.76s infinite linear both;
        transform-origin: 100% 100%;
        }
        & .loader-2 {
        transform: scale(1.1) rotateZ(90deg);
        }
        & .loader-3 {
        transform: scale(1.1) rotateZ(180deg);
        }
        & .loader-4 {
        transform: scale(1.1) rotateZ(270deg);
        }
        & .loader-2:before {
        animation-delay: 0.35s;
        }
        & .loader-3:before {
        animation-delay: 0.69s;
        }
        & .loader-4:before {
        animation-delay: 1.04s;
        }
    }
    @keyframes cube-loader {
    0%, 10% {
        transform: perspective(136px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(136px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(136px) rotateY(180deg);
        opacity: 0;
    }
}
`

export default PreloaderStyle