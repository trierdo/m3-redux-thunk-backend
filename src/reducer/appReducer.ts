import { initial } from '../state/appState'
import { IWindow } from '../framework/IWindow'
import { IAction, ActionType } from '../framework/IAction'
declare let window: IWindow;

export const reducer = (state = initial, action: IAction) => {
    window.logger.debug("2. ACTION:" + action.type);
    let newState = state;
    newState = JSON.parse(JSON.stringify(state));
    newState.UI.counter = state.UI.counter + 1;
    switch (action.type) {
        case ActionType.INIT:
            return newState;
         case ActionType.create_asset:
             return newState;
         case ActionType.edit_asset:
             return newState;
         default:
            window.logger.debug("1. Error!!!!! no reducer defined");
            return newState;
    }
}

