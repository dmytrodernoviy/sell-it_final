import React, {Component} from 'react';
import '../src/reset.css'
import LoginPage from './containers/LoginPage';
import {Switch, Route} from 'react-router-dom'
import {Router} from 'react-router'
import {Provider} from 'react-redux';
import combineReducers from './reducers/index'
import { applyMiddleware, createStore } from "redux"
import ProductRoutes from './routes/productRoute';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga';
import {composeWithDevTools} from "redux-devtools-extension"
import UserPage from './components/UserPage';
import {createBrowserHistory} from 'history';
import httpService from './api-client/interceptors';
import requireAuth from './components/common/PrivateRouteHOC';
import { autoLoginRequest } from './action-creators/authorize';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();
httpService.setupInterceptors(store, history)

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token) store.dispatch(autoLoginRequest(token))
  }
  
render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
          <Route path="/login-page/:sign" component={LoginPage} />
          <Route path="/user-page" component={requireAuth(UserPage)} />
          <Route path="/" component={requireAuth(ProductRoutes)} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App
