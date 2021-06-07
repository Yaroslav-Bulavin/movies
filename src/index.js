import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga/index";

const sagaMiddleware = createSagaMiddleware()
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
));

sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store}>
      <App/>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
