import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { IAssetData, IAssetAction } from './App';
import * as serviceWorker from './serviceWorker';
import mongoose from 'mongoose';

//import framework components
import { CS } from './framework/CS';
import { IWindow } from './framework/IWindow'
import { ActionType } from './framework/IAction';
declare let window: IWindow;



window.CS = new CS();
window.CS.initializeStore();

//the inital render
ReactDOM.render(<App stateCounter={window.CS.getUIState().counter} />, document.getElementById('root'));


//whenever there is a new state, we render again
window.CS.getStore().subscribe(() => {
  window.CS.log("3. before render ---------------------------------------------");
  ReactDOM.render(<App stateCounter={window.CS.getUIState().counter} />, document.getElementById('root'));
  window.CS.log("3. after render ---------------------------------------------");
});


console.log("handleCreateAsset invoked");


const newAsset: IAssetData = {
  _id: mongoose.Types.ObjectId().toString(),
  asset_name: "Porsche comes from index.tsx",
  asset_value: 50000
};
const action: IAssetAction = {
  type: ActionType.create_asset,
  asset: newAsset
};
window.CS.clientAction(action);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
