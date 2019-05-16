import React, {Component} from 'react'
import ListContainer from '../../components/ProducListComponents/ListContainer';
import {connect} from 'react-redux';
import {fetchProductList} from '../../action-creators/productListActionCreator';
import Preloader from '../../components/common/Preloader';
import NewProduct from '../../components/common/NewProductModal';

const mapStateToProps = state => ({
  productList: state.fetchProductListReducer.productList,
  isLoadingList: state.fetchProductListReducer.isLoadingList,
  showModal: state.showModal.isShowForm,
  authorized: state.authorized
});

class ProductList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProductList());
    }

    render() {
        const {isLoadingList, showModal, productList} = this.props;
        return (
            <React.Fragment>
                {(isLoadingList) 
                ? <Preloader />
                : <ListContainer data={productList}/>
                }
                
                {(showModal)
                ? <NewProduct />
                : null}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(ProductList);