import React, {Component} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button} from 'react-native-elements';
import { hideModal } from '../actions/triggerModal';
import { addCategory} from '../actions/addData';
import { getCategories } from '../actions/getData';


  class Category extends Component {
    state = {
      title:''
    }

    handleTitle = title => {
      this.setState({title: title})
    }

    collectData = () => {
      const data = {
        id:Math.floor(Math.random() * 1000),
        title:this.state.title,
        icon:'star-half',
      };
      return data;
    }

    addData = () => {
      const collectedData = this.collectData();
      this.props.addCategory(collectedData);
    }
    render() {
      return (
        <View>
          <Input
            placeholder="Enter category name"
            onChangeText={title => this.handleTitle(title)}
            style={{padding:25}}
          />
          <Button
            title="Solid Button"
            onPress={() => this.addData()}
          />
        </View>
      )
  }
}


const mapStateToProps = ({layout,category}) => ({
  modal: layout.modalSpinner,
  typeModal : layout.typeModal,
  allCategories:category.allCategories
});

export default connect (mapStateToProps, {
  hideModal,
  addCategory,
  getCategories
})(Category);
