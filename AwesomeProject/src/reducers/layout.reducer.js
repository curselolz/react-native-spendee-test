import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../index.constants';

const initialState = {
  modalSpinner:null,
};

export default layout = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, modalSpinner: true, typeModal:action.payload };
    case HIDE_MODAL:
      return { ...state, modalSpinner: false };
    default:
      return state;
  }
};
