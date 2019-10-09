import React from 'react';
import SimpleAsset from './components/SimpleAsset'
import mongoose from 'mongoose';

import { IAction, ActionType } from './framework/IAction';
import { IWindow } from './framework/IWindow'
declare let window: IWindow;

interface IProps {
  stateCounter:number
 }
export interface IAssetData {
  _id: string;
  asset_name: string;
  asset_value: number;
}

interface IState {
}

export interface ICreateAsset extends IAction{
  asset:IAssetData
}

export default class App extends React.PureComponent<IProps, IState> {

  constructor(props: any) {
    console.log("new App component will be initialized");
    super(props);

    this.handleCreateAsset = this.handleCreateAsset.bind(this);
  }

  render() {
    window.CS.log("App --> render()")
    return (
      <div>
        <p> {window.CS.getUIState().counter}</p>
        <h1>simple asset management application</h1>
        <p>to create a new asset click this button:&nbsp;
          <button onClick={this.handleCreateAsset}>create asset</button>
        </p>
        <table>
          <tbody>
            <tr><th>description</th><th>value</th><th>action</th></tr>
            {window.CS.getBMState().assets.map(asset => <SimpleAsset key={asset._id} asset={asset} edit={false} />)}
          </tbody>
        </table>
      </div>
    );
  }
  
  handleCreateAsset() {
    console.log("handleCreateAsset invoked");
    const newAsset: IAssetData = {
      _id: mongoose.Types.ObjectId().toString(),
      asset_name: "",
      asset_value: 0
    }
    const action:ICreateAsset ={
      type:ActionType.create_asset,
      asset:newAsset
    }
    window.CS.clientAction(action);
  }
 }
