import React, {Component} from 'react';
import '../src/reset.css'
import LoginPage from './containers/LoginPage';
import {Switch, Route} from 'react-router-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import ProductRoutes from './routes/productRoute';
import UserPage from './components/UserPage';
import requireAuth from './components/common/PrivateRouteHOC';
import { autoLoginRequest } from './action-creators/authorize';
import NotFound from './components/common/NotFound';
import { store, history } from './store';

const token = localStorage.getItem("token")
if(token) {
  store.dispatch(autoLoginRequest(token))
}

class App extends Component {
  
render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
          <Route path="/login-page/:sign" component={LoginPage} />
          <Route path="/not-found" component={requireAuth(NotFound)} />
          <Route path="/user-page" component={requireAuth(UserPage)} />
          <Route path="/" component={requireAuth(ProductRoutes)} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App
