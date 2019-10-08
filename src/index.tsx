import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// add redux support: npm install redux
import { createStore } from 'redux';
import { compose } from 'redux';
import { applyMiddleware } from 'redux';
// add thunk to dispatch multiple actions for just one UI event: npm install redux-thunk
import ReduxThunk from 'redux-thunk';

//import framework components
import {IWindow} from './framework/IWindow'
import {reducer} from './reducer/appReducer'
import Logger from './framework/Logger'

declare let window: IWindow;
window.logger = new Logger("debug");

let reduxMiddleware;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    reduxMiddleware = compose(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else { reduxMiddleware = applyMiddleware(ReduxThunk); }

 
window.store = createStore(
    reducer,
    reduxMiddleware
  );
   
ReactDOM.render(<App />, document.getElementById('root'));
 
window.store.subscribe(() => {
    window.logger.debug("3. before render ---------------------------------------------");
    ReactDOM.render(<App />, document.getElementById('root'));
    window.logger.debug("3. after render ---------------------------------------------");
  });
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
