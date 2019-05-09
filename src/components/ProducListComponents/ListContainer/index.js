import React from 'react'
import ListContainerStyle from './style';
import ProductItem from '../ProductItem';

const ListContainer = ({data}) =>
        <ListContainerStyle>
            {data.map((item) => 
                <ProductItem key={item.pk} 
                             id={item.pk} 
                             img={item.images}
                             title={item.theme || "Not specified"}/> 
                    )}
        </ListContainerStyle>
    
export default ListContainer