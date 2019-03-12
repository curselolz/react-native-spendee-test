import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View,Picker } from 'react-native';
import { Header, Button } from 'react-native-elements';
import {
  PieChart
} from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import {filterCategory} from '../../actions/editingData';
const screenWidth = Dimensions.get('window').width

class ChartComponent extends Component {
  state = {
    category:'',
  }

  render() {
    const data = this.props.sortData ? Array.from(this.props.sortData): this.props.transaction;
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2
    }

    return (
    <View>
      <Header
      centerComponent={{ text: 'Chart', style: { color: '#fff' } }}
    />
    <PieChart
    data={data}
    width={screenWidth}
    height={220}
    chartConfig={chartConfig}
    accessor="price"
    backgroundColor="transparent"
    paddingLeft="15"
    />
    <Picker
    selectedValue={this.state.category}
    style={{height: 50, width: 250}}
    onValueChange={(itemValue, itemIndex) =>
      this.setState({category: itemValue})
      }>
      {this.props.allCategories.map(el => <Picker.Item label={el.title} value={el.title} />)}
    </Picker>
    <Button
    onPress={() => this.props.filterCategory(this.state.category)}
    title="Apply sort"
    type="outline"
    />
    </View>
    )
  }
}
const mapStateToProps = ({transaction,category}) => ({
  allCategories:category.allCategories,
  transaction:transaction.transaction,
  sortData:category.sortData
});

ChartComponent.propTypes = {
  sortData: PropTypes.array,
  transaction: PropTypes.array,
}

export default connect(mapStateToProps, {
  filterCategory
})(ChartComponent);
