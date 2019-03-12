import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { Header, ListItem } from 'react-native-elements';
import { width, height, colors} from '../../utilities/const.util';
import MyCustomLeft from '../../container/customIcon.container';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalCustom from '../../container/modal.container';
import {getData} from '../../actions/getData';
import { removeData } from '../../actions/removeData';
import {defaultTransaction, defaultCategories} from '../../actions/addData';
import { connect } from 'react-redux';

class TransactionComponent extends Component {
  componentDidMount = () => {
    this.props.defaultTransaction();
    this.props.defaultCategories();
  }
  render() {
    const { transaction } = this.props;
    return (
      <View style={localStyle.container}>
      <Header
        leftComponent={<MyCustomLeft showItem={'transaction'}/>}
        centerComponent={{ text: 'ALL Categories', style: { color: '#fff' } }}
      />
      <ModalCustom typeModal={'transaction'}/>
  {
    transaction.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        subtitle={item.price}
        rightTitle={
          <TouchableWithoutFeedback
          onPress={() => this.props.removeData(item.id)}>
          <Icon name="minus" size={20} color="black" />
          </TouchableWithoutFeedback>
        }
        leftIcon={{ name: item.icon }}
        pad={32}
        onPress={()=>this.props.navigation.navigate('TransactionDetail', {item})}
      />
    ))
  }
      </View>
    )
  }
}

TransactionComponent.propTypes = {
  transaction: PropTypes.array,
}

TransactionComponent.defaultProps = {
  transaction: [{title:'no availabel transaction', id:0, price:0, icon:''}],
}

const localStyle = {
  container: {
    height: height['100'],
    width: width['100'],
    backgroundColor:'rgb(240,240,240)'
  },
  title: {
    fontSize: 20,
    color: colors.grey,
    marginVertical: 20,
  },
};

const mapStateToProps = ({transaction}) => ({
  transaction:transaction.transaction
});

export default connect(mapStateToProps, {
  getData,
  defaultTransaction,
  defaultCategories,
  removeData
})(TransactionComponent);
