import {combineReducers} from 'redux';
import layout from './layout.reducer';
import category from './addReducer';
import transaction from './getReducer';

export default combineReducers({
    layout,
    category,
    transaction,
})
