import React, {Dispatch} from 'react'
import ListContainer from '../../components/ProducListComponents/ListContainer';
import {connect} from 'react-redux';
import {fetchProductList} from '../../action-creators/productListActionCreator';
import Preloader from '../../components/common/Preloader';
import NewProduct from '../../components/common/NewProductModal';
import { AppState } from '../../reducers/index';
import { ProductItem } from '../../store-types/fetchProductList/interfaces-types';
import { AuthorizedState } from '../../store-types/authorized/interfaces-types';

interface StateProps {
    productList: ProductItem[];
    isLoadingList: boolean;
    showModal: boolean;
    authorized: AuthorizedState;
}

interface DispatchProps {
    fetchProductList: () => void;
}

const mapStateToProps = (state: AppState):StateProps => ({
  productList: state.fetchProductListReducer.productList,
  isLoadingList: state.fetchProductListReducer.isLoadingList,
  showModal: state.showModal.isShowForm,
  authorized: state.authorized
});

const mapDispatchToProps = (dispatch: Dispatch<any>):DispatchProps => ({
    fetchProductList: () => dispatch(fetchProductList())
})

class ProductList extends React.Component<StateProps & DispatchProps> {

    componentDidMount() {
        this.props.fetchProductList()
    }

    render() {
        const {isLoadingList, productList, showModal} = this.props
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);