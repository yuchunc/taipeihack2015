import React from 'react';
import { render } from "react-dom";
import thunkMiddleware from 'redux-thunk';
import create Logger from 'redux-Logger';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './container/App';
import marketApp from './reducer';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  devTools()
)(createStore);

const store = createStoreWithMiddleware(marketApp);

//render(
//);
