import React, {Component} from 'react'
import ListContainer from '../../components/ProducListComponents/ListContainer';
import {connect} from 'react-redux';
import {fetchProductList} from '../../action-creators/productListActionCreator';
import Preloader from '../../components/common/Preloader';
import NewProduct from '../../components/common/NewProductModal';

const mapStateToProps = state => ({
  productList: state.fetchProductListReducer.productList,
  isLoadingList: state.fetchProductListReducer.isLoadingList,
  filterProducts: state.filterProducts,
  showModal: state.showModal.isShowForm
});

class ProductList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProductList());
    }

    filterProduct = (arg) => {
        return this.props.productList.filter(prod => prod.theme.includes(arg))
    }

    render() {
        const {isLoadingList, showModal} = this.props;
        return (
            <React.Fragment>
                {(isLoadingList) 
                ? <Preloader />
                : <ListContainer data={this.filterProduct(this.props.filterProducts)}/>
                }
                {(showModal)
                ? <NewProduct />
                : null}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(ProductList);