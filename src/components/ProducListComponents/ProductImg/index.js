import React from 'react'
import ProductImgStyle from './style';
import DefaultImg from '../../../assets/img/product-item.png'
import propTypes from 'prop-types'

const ProductImg = ({img}) => 
    <ProductImgStyle >
        <img src = {(img.length === 0) ? DefaultImg : img[0].file} alt = "productImg" />
    </ProductImgStyle>

ProductImg.propTypes = {
    img: propTypes.array
}

export default ProductImg