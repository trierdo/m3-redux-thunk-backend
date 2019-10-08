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
import {reducer} from './reducer/appReducer'
import Logger from './framework/Logger'

import {IWindow} from './framework/IWindow'
import { IState } from './state/appState';
declare let window: IWindow;

window.logger = new Logger("debug");


//Dev tools are needed so we can see the state in the browser
//Redux thunk is needed for actions that make a rest call in order to create another action, when the server responds
let reduxMiddleware;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    reduxMiddleware = compose(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else { reduxMiddleware = applyMiddleware(ReduxThunk); }


//the reducer is the ONLY place where state can be (should be) changed
window.store = createStore(
    reducer,
    reduxMiddleware
  );

//the inital render
ReactDOM.render(<App />, document.getElementById('root'));
//whenever there is a new state, we render again
window.store.subscribe(() => {
    window.logger.debug("3. before render ---------------------------------------------");
    ReactDOM.render(<App />, document.getElementById('root'));
    window.logger.debug("3. after render ---------------------------------------------");
  });
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
