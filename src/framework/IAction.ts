export enum ActionType {
    INIT = "@@INIT",
    create_asset = "create_asset",
    edit_asset = "edit_asset"
}
export interface IAction {
    type: ActionType;
}
