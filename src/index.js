import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./Redux/Reducer";
import RootSaga from "./Redux/RootSaga";
import { HashRouter as Router } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();
const reduxStore = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Router>
      <Provider store={reduxStore}>
          <App/>
      </Provider>
  </Router>, document.getElementById('root')
);
