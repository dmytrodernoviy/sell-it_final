import React from 'react'
import ListContainer from '../../components/ProducListComponents/ListContainer';
import {connect} from 'react-redux';
import {fetchProductList} from '../../action-creators/productListActionCreator';
import Preloader from '../../components/common/Preloader';
import NewProduct from '../../components/common/NewProductModal';

const mapStateToProps = state => ({
    productList: state.fetchProductListReducer.productList,
    isLoadingList: state.fetchProductListReducer.isLoadingList,
    showModal: state.showModal.isShowForm,
    authorized: state.authorized,
    meta: state.fetchProductListReducer.meta
});

const mapDispatchToProps = dispatch => ({
    fetchProductList: (page) => dispatch(fetchProductList(page))
})

class ProductList extends React.Component {

    componentDidMount() {
        this.props.fetchProductList(1)
    }

    render() {
        const {isLoadingList, productList, showModal, meta} = this.props
        return (
            <React.Fragment>
                {(isLoadingList) 
                ? <Preloader />
                : <ListContainer    data={productList} 
                                    meta={meta}
                                    fetchProductList={this.props.fetchProductList}/>
                }
                
                {(showModal)
                ? <NewProduct />
                : null}
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);