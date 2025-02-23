import React from 'react'
import ProductTitleStyle from './style';
import FaEye from '../../../assets/img/fa-eye.png'
import {Link} from 'react-router-dom'

interface ProductTitleProps {
    id: number;
    title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({id, title}) => 
    <ProductTitleStyle>
        <span>{title}</span>
        <Link to={`/product/${id}`}>
            <img src={FaEye} alt="FaEye" />
        </Link>
    </ProductTitleStyle>

export default ProductTitle