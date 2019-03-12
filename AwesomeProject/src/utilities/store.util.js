import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducer from '../reducers/index';
// import { DEBUGGER_ENABLE } from './config.util';
const DEBUGGER_ENABLE = true;
const loggerVar = logger

export default store = DEBUGGER_ENABLE
? createStore(Reducer,
    applyMiddleware(
        thunk,
        // torn OFF when release
        loggerVar
        ))
        :createStore(Reducer,
            applyMiddleware(
                thunk,
                ))
