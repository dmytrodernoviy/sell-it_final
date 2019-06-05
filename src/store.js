import {rootReducer} from './reducers/index'
import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga';
import {composeWithDevTools} from "redux-devtools-extension"
import {createBrowserHistory} from 'history';
import httpService from './api-client/interceptors';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();
httpService.setupInterceptors(store, history)