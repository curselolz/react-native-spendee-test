import {
  ADD_ITEM, ADD_CATEGORY, REMOVE_ITEM, SET_DEFAULT_CATEGORY, SORT_DATA
} from '../index.constants';
import transactionComponent from '../components/transactions/transactionComponent';

const initialState = {
  item:null,
  allCategories:[],
  sortData:null,
};

export default category = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_CATEGORY:
      return { ...state, allCategories: action.payload };
    case ADD_CATEGORY:
      return {...state, allCategories: [...state.allCategories,action.payload]}
    case SORT_DATA:
      return {...state, sortData: action.payload}
    default:
      return state;
  }
};
