import React, {Component} from 'react';
import '../src/reset.css'
import LoginPage from './containers/LoginPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import combineReducers from './reducers/index'
import { applyMiddleware, createStore } from "redux"
import ProductRoutes from './routes/productRoute';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga';
import {composeWithDevTools} from "redux-devtools-extension"
import UserPage from './components/UserPage';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

class App extends Component {
render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
          <Route path="/login-page/:sign" component={LoginPage} />
          <Route path="/user-page" component={UserPage} />
          <Route path="/" component={ProductRoutes} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
