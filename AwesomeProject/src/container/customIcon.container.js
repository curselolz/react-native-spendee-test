import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions/triggerModal';
import PropTypes from 'prop-types';


const MyCustomLeft = ({showItem,showModal}) => {
  return (
    <TouchableWithoutFeedback
    onPress={() => showModal(showItem)}
  >
    <Icon name="plus" size={20} color="white" />
  </TouchableWithoutFeedback>
  )
}


const mapStateToProps = ({ }) => ({

});

MyCustomLeft.propTypes = {
  showItem: PropTypes.string,
}

export default connect(
  mapStateToProps, {showModal, hideModal}
  )(MyCustomLeft);
