import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import framework components
import {CS} from './framework/CS';
import {IWindow} from './framework/IWindow'
declare let window: IWindow;



window.CS = new CS();
window.CS.initializeStore();

console.log(window.CS.getUIState().counter);

//the inital render
ReactDOM.render(<App stateCounter={window.CS.getUIState().counter}/>, document.getElementById('root'));
//whenever there is a new state, we render again


window.CS.getStore().subscribe(() => {
    window.CS.log("3. before render ---------------------------------------------");
    ReactDOM.render(<App stateCounter={window.CS.getUIState().counter}/>, document.getElementById('root'));
    window.CS.log("3. after render ---------------------------------------------");
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
