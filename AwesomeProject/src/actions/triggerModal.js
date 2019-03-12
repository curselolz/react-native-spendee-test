import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../index.constants';

export const showModal = (item) => {
  return dispatch => {
      dispatch({ type: SHOW_MODAL, payload:item })
  }
}

export const hideModal = () => {
  return dispatch => {
      dispatch({ type: HIDE_MODAL })
  }
}
