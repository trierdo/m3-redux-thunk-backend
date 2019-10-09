import { initial, IState } from '../state/appState'
import { IWindow } from '../framework/IWindow'
import { IAction, ActionType } from '../framework/IAction'
import {IUpdateAsset} from '../components/SimpleAsset'
import mongoose from 'mongoose';
import { IAssetData } from '../App';

declare let window: IWindow;



export const reducer = (state = initial, action: IAction) => {
    window.CS.log("2. ACTION:" + action.type);
    let newState: IState = state;
    newState = JSON.parse(JSON.stringify(state)) as IState;
    newState.UI.counter = state.UI.counter + 1;
    switch (action.type) {
        case ActionType.INIT:
            return newState;
        case ActionType.create_asset:
                newState.BM.assets.push(
                    {
                        _id: mongoose.Types.ObjectId().toString(),
                        asset_name: "new Asset",
                        asset_value: 0
                    }
                )
            return newState;
        case ActionType.update_asset:
            let updateAction = action as IUpdateAsset;
            let assetToChange:IAssetData[] = newState.BM.assets.filter(asset => asset._id===updateAction.asset._id)
            console.log(assetToChange);
            assetToChange[0].asset_name=updateAction.asset.asset_name;
            assetToChange[0].asset_value=updateAction.asset.asset_value;
            return newState;
        default:
            window.CS.log("1. Error!!!!! no reducer defined");
            return newState;
    }
}

