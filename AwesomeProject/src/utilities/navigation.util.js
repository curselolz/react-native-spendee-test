import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import TransactionComponent from '../components/transactions/transactionComponent'
import TransactionDetail from '../components/transactions/transactionDetailComponent';
import CategoriesComponent from '../components/categories/categoriesComponent';
import ChartComponent from '../components/charts/chartComponent';
import WelcomeComponent from '../components/welcomeComponent';

const WelcomeNavigation = createStackNavigator({
  Welcome: {
    screen: WelcomeComponent
  },
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

const WelcomeNavigationContainer = createAppContainer(WelcomeNavigation);

const BottomTab = createBottomTabNavigator({
  Transaction: {
    screen:TransactionComponent,
  },
  Categories: {
    screen:CategoriesComponent,
  },
  Charts: {
    screen:ChartComponent,
  },
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

const BottomTabContainer = createAppContainer(BottomTab);

const MainNavigator = createStackNavigator({
  Start: WelcomeNavigationContainer,
  Main: BottomTabContainer,
  TransactionDetail:TransactionDetail,
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
);
export default createAppContainer(MainNavigator);
