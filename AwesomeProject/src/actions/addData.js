import {
  ADD_ITEM,
  ADD_CATEGORY,
  SET_DEFAULT_CATEGORY,
  SET_DEFAULT_TRANSACTION,
} from '../index.constants';
import {AsyncStorage} from 'react-native';

export const addData = (item) => (dispatch) => {
  AsyncStorage.getItem('transaction', (err, result) => {
    if (result !== null) {
      const existingData = JSON.parse(result);
      existingData.push(item);
      dispatch({type:ADD_ITEM, payload:item});
      AsyncStorage.setItem('transaction', JSON.stringify(existingData));
    } else {
      console.log('Data Not Found');
    }
  });
}

export const addCategory = (item) => (dispatch) => {
  AsyncStorage.getItem('categories', (err, result) => {
    if (result !== null) {
      const existingData = JSON.parse(result);
      existingData.push(item);
      dispatch({type:ADD_CATEGORY, payload:item});
      AsyncStorage.setItem('categories', JSON.stringify(existingData));
    } else {
      console.log('Category not found');
    }
  });
}

export const defaultTransaction = () => (dispatch) => {
  const transactionData = [{
      id:1,
      title:'my transaction',
      type:'expense',
      sum:40,
      icon:'apps'
    }];
  AsyncStorage.setItem('transaction', JSON.stringify(transactionData)).then((value)=>{
    dispatch({type: SET_DEFAULT_TRANSACTION})
  }).catch((err) => {
    console.log(err);
  })
}

export const defaultCategories = () => (dispatch) => {
  const category = [
    {
      id: 1,
      title: 'education',
      icon: 'star-half'
    },
    {
      id: 2,
      title: 'car',
      icon: 'star-half'
    },
    {
      id: 3,
      title: 'meals',
      icon: 'star-half'
    },
  ]
  try {
    AsyncStorage.setItem('categories', JSON.stringify(category)).then((value)=>{
      dispatch({type: SET_DEFAULT_CATEGORY, payload:category})
    }).catch((err) => {
      console.log(err);
    })
  } catch(error) {
    console.log('error');
    console.log(error);
  }
}
