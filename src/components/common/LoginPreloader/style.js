import styled from 'styled-components'

const LoginPreloaderStyle = styled.div`
@keyframes animate-circle {
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(1);
        opacity: 0;
    }
}

.loader {
    --size: 15rem;
    margin-left: 50%;
    margin-top: 50%;
    height: var(--size);
    width: var(--size);
    transform: translateX(-50%) translateY(-50%);
    > .circle {
        --duration: 2s;
        position: absolute;
        height: inherit;
        width: inherit;
        background: white;
        border-radius: 50%;
        animation: animate-circle var(--duration) cubic-bezier(.9,.24,.62,.79) infinite;
        
        &:nth-of-type(1) {
            animation-delay: 0;
        }
        &:nth-of-type(2) {
            animation-delay: calc(var(--duration) / -3);
        }
        &:nth-of-type(3) {
            animation-delay: calc(var(--duration) / -6);
        }
    }
}
`

export default LoginPreloaderStyle