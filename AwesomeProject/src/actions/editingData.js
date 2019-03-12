
import {EDIT_START, EDIT_END, UPDATE_DATA, SORT_DATA} from '../index.constants';
import {AsyncStorage} from 'react-native';

export const editData = () => (dispatch) => {
  dispatch({type: EDIT_START, payload:true})
};

export const editDataEnd = () => (dispatch) => {
  dispatch({type: EDIT_END, payload:false})
};

export const updateData = item => (dispatch) => {
  AsyncStorage.getItem('transaction', (err, result) => {
    if (result !== null) {
      const existingData = JSON.parse(result);
      let a = existingData.find(el => el.id === item.id);
      for(let i in a) {
        if(a[i] !== item[i]) {
          a[i] = item[i];
        }
      }
      dispatch({type:UPDATE_DATA, payload:existingData});
      AsyncStorage.setItem('transaction', JSON.stringify(existingData));
    } else {
      console.log('Data Not Found');
    }
  });
}

export const filterCategory = categoryName => (dispatch) => {
  AsyncStorage.getItem('transaction', (err, result) => {
    if (result !== null) {
      const existingData = JSON.parse(result);
      const sortedData = existingData.filter(element => element.category === categoryName);
      dispatch({type:SORT_DATA, payload:sortedData})
    } else {
      console.log('Data Not Found');
    }
  });
}
