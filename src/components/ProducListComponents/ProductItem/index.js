import React, {useState} from 'react'
import ProductItemStyle from './style';
import ProductImg from '../ProductImg';
import ProductTitle from '../ProductTitle';
import { CreateErrorHOC } from '../../common/CreateErrorHOC';

const ProductItem = ({img, id, title}) => {
    const [zoom, changeZoom] = useState(1)

    return (
        <ProductItemStyle onMouseEnter={() => {changeZoom(1.05)}}
                          onMouseLeave={() => {changeZoom(1)}}
                          zoom = {zoom}>
            <ProductImg img={img} />
            <ProductTitle id={id} title={title}/>
        </ProductItemStyle>
    )
}
       
export default CreateErrorHOC(ProductItem)