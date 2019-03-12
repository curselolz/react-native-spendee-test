import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { colors, width } from '../utilities/const.util';

const welcomeComponent = ({navigation}) => {
  return (
    <View style={localStyle.container}>
      <Text style={localStyle.font}>The only app that gets your money into shape</Text>
      <TouchableHighlight
        onPress={navigation.navigate('Main')}
        style={localStyle.btn}
      >
        <Text style={localStyle.text}>press</Text>
      </TouchableHighlight>
      <Text style={localStyle.bottomText}>Manage money on the go in the app</Text>
    </View>
  )
}

const localStyle = {
  container: {
    width:width['100'],
    justifyContent:'center',
    alignItems:'center',
  },
  btn: {
    width:140,
    height:40,
    borderRadius:20,
    backgroundColor:colors.green,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'white',
    fontSize:16,
  },
  bottomText: {
    fontSize:19,
  },
  font: {
    fontSize:20
  }
};
welcomeComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,

}

export default welcomeComponent;
