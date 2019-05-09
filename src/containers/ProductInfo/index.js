import React, {Component} from 'react'
import SingleProductInfo from '../../components/SingleProductInfo/SingleProduct';
import {connect} from 'react-redux';
import Preloader from '../../components/common/Preloader';
import { fetchProductItem } from '../../action-creators/productItemActionCreator';

const mapStateToProps = state => ({
  productItem: state.fetchProductItemReducer.productItem,
  isLoadingItem: state.fetchProductItemReducer.isLoadingItem,
});

class ProductInfo extends Component {
    componentDidMount() {
      const id = this.props.match.params.id
      this.props.dispatch(fetchProductItem(id))
    }
    
    render() {
      let {productItem, isLoadingItem} = this.props
        return(
            <React.Fragment>
                 {(isLoadingItem)
                 ? <Preloader />
                 : <SingleProductInfo item = {productItem}/>
                }
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(ProductInfo);
