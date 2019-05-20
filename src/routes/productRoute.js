import React from 'react'
import Header from '../components/ProducListComponents/Header';
import Footer from '../components/LoginPageComponents/Footer';
import ProductList from '../containers/ProductList';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import ProductInfo from '../containers/ProductInfo';
import { logOutRequest } from '../action-creators/authorize';

const mapStateToProps = state => ({
    authorized: state.authorized
})

const mapDispatchToProps = dispatch => ({
    logOut: () => {
        dispatch(logOutRequest())
    }
})

export const Context = React.createContext()

const ProductRoutes = ({logOut, authorized}) => (
    <React.Fragment>
        <Context.Provider value = {{logOut: logOut, authorized: authorized}} >
            <Header />
        </Context.Provider>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/product/:id" component={ProductInfo} />
            </Switch>
        <Footer />
        
    </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductRoutes)
