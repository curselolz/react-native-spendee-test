import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View,Text} from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import {
  LineChart,
  PieChart,
} from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width

class ChartComponent extends Component {
  static propTypes = {

  }

  render() {
    console.log(this.props.transaction.map(el => el.price))
    const data = [
      { name: 'Seoul', population: 5, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Toronto', population: 4, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Beijing', population: 3, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'New York', population: 2, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Moscow', population: 1, color: 'black', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ]
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2 // optional, default 3
    }

    return (
<View>
<Header
      // leftComponent={{ icon: 'add', color: '#fff' }}
      centerComponent={{ text: 'Chart', style: { color: '#fff' } }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
    />
  <Text>
    Bezier Line Chart
  </Text>
  <LineChart
    data={{
      labels: this.props.allCategories.map(el => el.title),
      datasets: [{
        data: this.props.transaction.map(el => el.price)
      }]
    }}
    width={Dimensions.get('window').width}
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
/>

</View>
    )
  }
}
const mapStateToProps = ({transaction,category}) => ({
  allCategories:category.allCategories,
  transaction:transaction.transaction
});


export default connect(mapStateToProps, {

})(ChartComponent);
