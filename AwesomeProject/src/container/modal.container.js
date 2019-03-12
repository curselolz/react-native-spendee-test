import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Overlay} from 'react-native-elements';
import { hideModal } from '../actions/triggerModal';

import Transaction from './transaction.container';
import Category from './category.container';


const ModalCustom = ({modal,hideModal,typeModal}) => {
  return (
    <Overlay
    visible={modal}
    onBackdropPress={() => hideModal()}
    height="auto"
    >
    {typeModal === 'transaction' ? <Transaction /> : <Category />}
    </Overlay>
  )
}

const mapStateToProps = ({layout}) => ({
  typeModal : layout.typeModal,
  modal: layout.modalSpinner,

});

export default connect (mapStateToProps, {
  hideModal
})(ModalCustom);
