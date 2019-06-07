import React from 'react'
import Header from '../components/ProducListComponents/Header';
import Footer from '../components/LoginPageComponents/Footer';
import ProductList from '../containers/ProductList';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import ProductInfo from '../containers/ProductInfo';
import { logOutRequest, getProfileInfo } from '../action-creators/authorize';
import propTypes from 'prop-types'
import { showModalForm, requestSearchProduct, fetchProductList } from '../action-creators/productListActionCreator';
import { Pagination } from '../components/ProducListComponents/Pagination';

const mapStateToProps = state => ({
    authorized: state.authorized,
    productList: state.fetchProductListReducer.productList,
    meta: state.fetchProductListReducer.meta,
    productItem: state.fetchProductItemReducer.productItem,
    isLoadinglist: state.fetchProductListReducer.isLoadingList,
    isLoadingItem: state.fetchProductItemReducer.isLoadingItem
})

const mapDispatchToProps = dispatch => ({
    logOut: () => {
        dispatch(logOutRequest())
    },
    showModalForm: () => {
        dispatch(showModalForm())
    },
    getProfileInfo: () => {
        dispatch(getProfileInfo())
    },
    findProduct: (e) => {
        dispatch(requestSearchProduct(e))
    },
    fetchProductList: (page) => {
        dispatch(fetchProductList(page))
    } 
})

export const Context = React.createContext()

const ProductRoutes = ({logOut, 
                        authorized, 
                        showModalForm, 
                        getProfileInfo, 
                        findProduct,
                        meta,
                        fetchProductList,
                        productList,
                        isLoadingItem,
                        isLoadinglist}) => (
    <React.Fragment>
        <Context.Provider value = {{logOut, 
                                    authorized, 
                                    showModalForm, 
                                    getProfileInfo, 
                                    findProduct,
                                    productList}} >
            <Header />
        </Context.Provider>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/product/:id" component={ProductInfo} />
            </Switch>
        {(!productList.length)
            ? null
            : <Pagination meta={meta} fetchProductList={fetchProductList}/>
        }
        <Footer />
    </React.Fragment>
)

ProductRoutes.propTypes = {
    logOut: propTypes.func,
    authorized: propTypes.object,
    showModalForm: propTypes.func,
    getProfileInfo: propTypes.func,
    findProduct: propTypes.func,
    meta: propTypes.object,
    fetchProductList: propTypes.func,
    productList: propTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductRoutes)
