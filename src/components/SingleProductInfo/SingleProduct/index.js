import React from 'react'
import images from '../../../assets/img/product-item.png'
import SingleProductStyle from './style';

const SingleProductInfo = ({item}) => {
    if(JSON.stringify(item)  === "{}") return null;
    return (
        <SingleProductStyle>
        <img src={(item.images.length === 0) ? images : item.images[0].file } alt="images"/>
        <div>
            <span><b>UserName:</b> {item.owner.username|| "Не указано"}</span>
            <span><b>Theme:</b> {item.theme || "Не указано"}</span>
            <span><b>Category:</b> {item.category || "Не указано"}</span>
            <span><b>Text:</b> {item.text || "Не указано"}</span>
            <span><b>Price: {item.price || "Не указано"}</b></span>
        </div>
    </SingleProductStyle>
    )
}
    
export default SingleProductInfo