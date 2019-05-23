import React from 'react'
import ListContainerStyle from './style';
import ProductItem from '../ProductItem';
import ErrorBoundary from '../../common/ErrorBoundary';

const ListContainer = ({data}) => {
    return (
        <ListContainerStyle>
            {(data.length === 0) ? <h1>Oops, no match)) Please, try again</h1> :
                data.map((item) => 
                <ErrorBoundary key={item.pk}>
                    <ProductItem key={item.pk} 
                                id={item.pk} 
                                img={item.images}
                                title={item.theme || "Not specified"}/> 
                </ErrorBoundary>
                        )}
                
        </ListContainerStyle>
    )
}
        
    
export default ListContainer