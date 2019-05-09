import React from 'react'
import ProductItemStyle from './style';
import ProductImg from '../ProductImg';
import ProductTitle from '../ProductTitle';

const ProductItem = ({img, id, title}) =>
    <ProductItemStyle>
        <ProductImg img={img}/>
        <ProductTitle id={id} title={title}/>
    </ProductItemStyle>

export default ProductItem