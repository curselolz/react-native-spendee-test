import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions/triggerModal';
import PropTypes from 'prop-types';
import { editData,editDataEnd } from '../actions/editingData';
import {updateData} from '../actions/editingData';

const EditPressBtn = ({editIndicator,editData,editDataEnd,updateData,item}) => {
  return (
    <TouchableWithoutFeedback
    onPress={() => {
      if(editIndicator){
        editDataEnd();
        updateData(item);
      } else {
        editData()
      }
    }}
  >
    {editIndicator ? <Icon name="save" size={20} color="white" /> : <Icon name="edit" size={20} color="white" />}
  </TouchableWithoutFeedback>
  )
}

const mapStateToProps = ({transaction}) => ({
  editIndicator:transaction.editData
});
export default connect(mapStateToProps, {editData, editDataEnd,updateData})(EditPressBtn);
