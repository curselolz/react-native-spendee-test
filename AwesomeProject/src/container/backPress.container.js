import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions/triggerModal';
import PropTypes from 'prop-types';


const BackPressBtn = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.goBack()}
  >
    <Icon name="arrow-left" size={20} color="white" />
  </TouchableWithoutFeedback>
  )
}


export default BackPressBtn;
