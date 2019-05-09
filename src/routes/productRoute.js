import React from 'react'
import Header from '../components/ProducListComponents/Header';
import Footer from '../components/LoginPageComponents/Footer';
import ProductList from '../containers/ProductList';
import {Switch, Route} from 'react-router-dom'
import ProductInfo from '../containers/ProductInfo';

const ProductRoutes = () => (
    <React.Fragment>
        <Header />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/product/:id" component={ProductInfo} />
            </Switch>
        <Footer />
    </React.Fragment>
)

export default ProductRoutes
