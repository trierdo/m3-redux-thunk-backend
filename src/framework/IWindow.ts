import Logger from './Logger';
import {CS} from '../framework/CS'

export interface IWindow extends Window {
    CS:CS;
    store: any;
    logger: Logger;
    __REDUX_DEVTOOLS_EXTENSION__: any;
}