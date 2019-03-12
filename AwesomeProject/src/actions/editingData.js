
import {EDIT_START, EDIT_END, UPDATE_DATA} from '../index.constants';

export const editData = () => (dispatch) => {
  dispatch({type: EDIT_START, payload:true})
};

export const editDataEnd = () => (dispatch) => {
  dispatch({type: EDIT_END, payload:false})
};

export const updateData = item => (dispatch) => {
  dispatch({type: UPDATE_DATA, payload: item})
}
