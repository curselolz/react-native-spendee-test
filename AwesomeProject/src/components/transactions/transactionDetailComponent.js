import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header,ButtonGroup } from 'react-native-elements';
import BackPressBtn from '../../container/backPress.container';
import EditPressBtn from '../../container/editPress.container';
import { connect } from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';

class TransactionDetailComponent extends Component {
  state = {
    title:this.props.navigation.state.params.item.title,
    money:this.props.navigation.state.params.item.price,
    date:this.props.navigation.state.params.item.date,
    category:this.props.navigation.state.params.item.category,
    categoryIndex:this.props.navigation.state.params.item.categoryIndex,
    selectedIndex: 2
  }

  updateIndex = (categoryIndex) => {
    this.setState({categoryIndex})
  }

  render() {

  const buttons = this.props.allCategories.map(el => el.title);
  const obj = {
    id:this.props.navigation.state.params.item.id,
    price: this.state.money,
    date: this.state.date,
    title: this.state.title,
    category: this.state.category,
    categoryIndex:this.state.categoryIndex,
    icon:this.props.navigation.state.params.item.icon
  }
    return(
      <View>
        <Header
          leftComponent={<BackPressBtn navigation={this.props.navigation} />}
          centerComponent={{ text: 'title', style: { color: '#fff' } }}
          rightComponent={<EditPressBtn item={obj}/>}
        />
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{paddingTop:25}}>Title:</Text>
          <TextInput
            onChangeText={title => this.setState({title})}
            editable = {this.props.editData ? true : false}
            value={this.state.title}
          />
        <Text>Price:</Text>
        <TextInputMask
            placeholder={'Enter value'}
            type={'money'}
            editable = {this.props.editData ? true : false}
            value={this.state.money}
            onChangeText={text => {
              this.setState({
                money: text
              })
            }}
          />
          <Text>Date:</Text>
          {/* <TextInputMask
            placeholder={'Enter date of transaction'}
            type={'datetime'}
            options={{
              format: 'MM/DD/YYYY'
            }}
            value={this.state.date}
            onChangeText={text => {
              this.setState({
                date: text
              })
            }}
          /> */}
          <Text>Category:</Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.categoryIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
          </View>
      </View>
    )
  }
}


TransactionDetailComponent.propTypes = {

}

const mapStateToProps = ({transaction, category}) => ({
  editData:transaction.editData,
  allCategories:category.allCategories
});

export default connect(mapStateToProps, {})(withNavigation(TransactionDetailComponent));
