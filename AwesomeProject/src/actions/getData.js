import {
  GET_DATA,
  GET_ALL_CATEGORIES,
  SHOW_BTN_SPINNER,
} from '../index.constants';
import {AsyncStorage} from 'react-native';

export const getData = () => (dispatch) => {
  dispatch({ type: SHOW_BTN_SPINNER });
  AsyncStorage.getItem('transaction').then((value) => {
    dispatch({type: GET_DATA, payload: JSON.parse(value)});
  });
}

export const getCategories = () => (dispatch) => {
  dispatch({ type: SHOW_BTN_SPINNER });
  AsyncStorage.getAllKeys().then((value) => {
    dispatch({type:GET_ALL_CATEGORIES, payload: value})
  });
}
