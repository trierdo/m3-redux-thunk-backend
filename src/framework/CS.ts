import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from '../reducer/appReducer'
import ReduxThunk from 'redux-thunk';

import { IWindow } from '../framework/IWindow'
import Logger from './Logger';
declare let window: IWindow;

//Dev tools are needed so we can see the state in the browser
//Redux thunk is needed for actions that make a rest call in order to create another action, when the server responds
let reduxMiddleware: any;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    reduxMiddleware = compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
} else { reduxMiddleware = applyMiddleware(ReduxThunk); }


export class CS {
    private store: any;
    private logger: Logger;
    constructor() {
        this.store = createStore(
            reducer,
            reduxMiddleware
        );
        this.logger = new Logger("debug");
    }
    public log(message: string) {
        this.logger.debug(message);
    }
    public getStore(){
        return this.store;
    }
}