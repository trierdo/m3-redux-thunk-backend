import Logger from './Logger';

export interface IWindow extends Window {
    store: any;
    logger: Logger;
    __REDUX_DEVTOOLS_EXTENSION__: any;
}