import { AsyncStorage } from 'react-native';
import { REMOVE_ITEM } from '../index.constants';

export const removeData = (itemID) => (dispatch) => {
  AsyncStorage.getItem('transaction').then((value)=>{
    const parsedArray = JSON.parse(value).filter(el => el.id !== itemID);

    AsyncStorage.setItem('transaction', JSON.stringify(parsedArray)).then((value)=>{
    dispatch({type: REMOVE_ITEM, payload: parsedArray})
    }).catch((err) => {
      console.log('error removed value');
      console.log(err);
    });
  });
}
