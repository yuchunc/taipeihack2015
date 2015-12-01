import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
//import App from './containers/App'

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware, // utilise dispatch() function
    loggerMiddleware // logging middleware
  ),
  devTools()
)(createStore);

render(
  <div>
    <Provider>
      //<App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools monitor={Log<onitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
)
