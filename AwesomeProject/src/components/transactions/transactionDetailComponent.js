import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header } from 'react-native-elements';
import BackPressBtn from '../../container/backPress.container';
import EditPressBtn from '../../container/editPress.container';
import { connect } from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';

const TransactionDetailComponent = props => {
  console.log(props);
  const title = props.navigation.state.params.item.title;
  const moneyInput = props.navigation.state.params.item.price;
  const dateInput = props.navigation.state.params.item.date;
  const description = props.navigation.state.params.item.description;
  return (
    <View>
      <Header
        leftComponent={<BackPressBtn navigation={props.navigation} />}
        centerComponent={{ text: title, style: { color: '#fff' } }}
        rightComponent={<EditPressBtn />}
      />
      <View>
      <TextInput
        placeholder="Enter your description"
        onChangeText={description => console.log(description)}
        editable = {props.editData}
        value={description}
      />
      <Text>123123123</Text>
      </View>
      {/* <TextInputMask
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
          /> */}

    </View>
  )
}

TransactionDetailComponent.propTypes = {

}

const mapStateToProps = ({transaction}) => ({
  editData:transaction.editData,
});

export default connect(mapStateToProps, {})(withNavigation(TransactionDetailComponent));
