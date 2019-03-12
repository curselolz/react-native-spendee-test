import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Overlay, Text, Input, ButtonGroup, Button} from 'react-native-elements';
import { hideModal } from '../actions/triggerModal';
import { TextInputMask } from 'react-native-masked-text';
import { addData , addCategory} from '../actions/addData';
import { getCategories } from '../actions/getData';


  class Transaction extends Component {
    state = {
      moneyInput:'',
      dateInput:'',
      selectedIndex: 2
    }

    updateIndex = (selectedIndex) => {
      this.setState({selectedIndex})
    }

    handleDescription = description => {
      this.setState({description: description})
    }

    collectData = () => {
      const buttons = this.props.allCategories.map(el => el.title);
      let categoryValue = buttons[this.state.selectedIndex];
      const data = {
        id:Math.floor(Math.random() * 1000),
        price: this.moneyMask.getRawValue(),
        date: this.dateMask.getRawValue(),
        title: this.state.description,
        category: categoryValue,
        icon:'apps'
      };
      return data;
    }
    addData = () => {
      const collectedData = this.collectData();
      this.props.addData(collectedData);
    }
    render() {
      const buttons = this.props.allCategories.map(el => el.title);
      const { modal, hideModal } = this.props;
      const { moneyInput, dateInput, selectedIndex} = this.state;
      return (
        <View>
        <Text h4>Enter data your transaction</Text>
        <TextInputMask
            placeholder={'Enter value'}
            type={'money'}
            value={moneyInput}
            onChangeText={text => {
              this.setState({
                moneyInput: text
              })
            }}
            ref={(ref) => this.moneyMask = ref}
          />
          <TextInputMask
            placeholder={'Enter date of transaction'}
            type={'datetime'}
            options={{
              format: 'MM/DD/YYYY'
            }}
            value={dateInput}
            onChangeText={text => {
              this.setState({
                dateInput: text
              })
            }}
            ref={(ref) => this.dateMask = ref}
          />
          <Input
            placeholder="Enter your description"
            onChangeText={description => this.handleDescription(description)}
          />
        <Text>Select a category:</Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        <Input
            placeholder="Enter title categories"
            onChangeText={description => this.handleDescription(description)}
          />
          <Button
            title="Solid Button"
            onPress={() => this.addData()}
          />
        </View>
      )
  }
}

Transaction.propTypes = {
  transaction:PropTypes.bool,
  categories:PropTypes.bool,
  modal: PropTypes.bool,
  allCategories: PropTypes.array,
}

Transaction.defaultProps = {
  transaction: true,
  categories: false,
  modal: false,
  allCategories: [{title:'no available category'}]
}

const mapStateToProps = ({layout,category}) => ({
  modal: layout.modalSpinner,
  typeModal : layout.typeModal,
  allCategories:category.allCategories
});

export default connect (mapStateToProps, {
  hideModal,
  addData,
  addCategory,
  getCategories
})(Transaction);
