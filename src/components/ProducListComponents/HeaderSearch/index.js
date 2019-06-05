import React, {useContext} from 'react'
import HeaderInputStyle from './style';
import { Context } from '../../../routes/productRoute';

const HeaderSearch = () => {
    const {findProduct} = useContext(Context)
    return (
        <HeaderInputStyle type="text" 
            placeholder="Try find something" 
            onChange={(e) => findProduct(e.target.value)}/>
    )
}
    
export default HeaderSearch