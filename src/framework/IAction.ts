export enum ActionType {
    INIT = "@@INIT",
    create_asset = "create_asset",
    update_asset = "update_asset",
    render_test = "render_test" 
}
export interface IAction {
    type: ActionType;
}
