import {
  GET_DATA,
  GET_ALL_DATA,
  GET_ALL_CATEGORIES,
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_START,
  EDIT_END
} from '../index.constants';

const initialState = {
  transaction:[],
  editData:false,
};

export default transaction = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, transaction: action.payload };
    case ADD_ITEM:
      return { ...state, transaction: [...state.transaction,action.payload] };
    case REMOVE_ITEM:
      return { ...state, transaction: action.payload };
    case EDIT_START:
      return { ...state, editData: action.payload };
    case EDIT_END:
      return { ...state, editData: action.payload };
    default:
      return state;
  }
};
