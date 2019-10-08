import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// add redux support: npm install redux
import { createStore, compose, applyMiddleware } from 'redux';

// add thunk to dispatch multiple actions for just one UI event: npm install redux-thunk
import ReduxThunk from 'redux-thunk';

//import framework components
import {reducer} from './reducer/appReducer'
import Logger from './framework/Logger'
import {IWindow} from './framework/IWindow'
declare let window: IWindow;


import {CS} from './framework/CS';

window.CS = new CS();

//the inital render
ReactDOM.render(<App />, document.getElementById('root'));
//whenever there is a new state, we render again
window.CS.getStore().subscribe(() => {
    window.logger.debug("3. before render ---------------------------------------------");
    ReactDOM.render(<App />, document.getElementById('root'));
    window.logger.debug("3. after render ---------------------------------------------");
  });
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
