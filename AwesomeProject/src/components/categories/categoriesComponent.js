import React, { Component } from 'react';
import { View, } from 'react-native';
import PropTypes from 'prop-types';
import { Header, ListItem } from 'react-native-elements';
import { width, height, colors} from '../../utilities/const.util';
import MyCustomLeft from '../../container/customIcon.container';
import { defaultCategories } from '../../actions/addData';
import { getCategories } from '../../actions/getData';
import { connect } from 'react-redux';

const CategoriesComponent = ({allCategories}) => {
  return (
    <View style={localStyle.container}>
    <Header
      leftComponent={<MyCustomLeft showItem={'categories'}/>}
      centerComponent={{ text: 'ALL Categories', style: { color: '#fff' } }}
    />
    {
      allCategories.map((item, i) => (
      <ListItem
      key={i}
      title={item.title}
      leftIcon={{name:item.icon}}
      />
      ))
      }
    </View>
  )
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

const mapStateToProps = ({category}) => ({
  allCategories:category.allCategories
});

CategoriesComponent.propTypes = {
  allCategories: PropTypes.array,
}

export default connect(mapStateToProps , {
  defaultCategories,
  getCategories,
})(CategoriesComponent);
