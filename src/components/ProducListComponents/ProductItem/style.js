import styled from 'styled-components'

const ProductItemStyle = styled.div`
    width: 275px;
    height: 180px;
    margin: 30px 10px;
    transform: scale(${props => props.zoom});
    @media(max-width: 640px) {
        margin: 30px auto;
    }
`

export default ProductItemStyle
