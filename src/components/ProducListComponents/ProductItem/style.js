import styled from 'styled-components'

const ProductItemStyle = styled.div`
    width: 24%;
    @media (max-width: 1024px) {
        width: 32%;
    }

    @media(max-width: 768px) {
        width: 48%;
    }

    @media(max-width: 480px) {
        width: 100%;
    }
`

export default ProductItemStyle
