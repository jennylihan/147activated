import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import CalendarScreen from '../screens/CalendarScreen';
import MapsScreen from '../screens/MapsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AddScreen from '../screens/AddScreen';

export default TabNavigator(
  {
    MyMap: {
      screen: MapsScreen,
    },
    Calendar: {
      screen: CalendarScreen,
    },
    Notifications: {
      screen: NotificationsScreen,
    },
    Add: {
      screen: AddScreen
   },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'MyMap':
            iconName = Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map';
            break;
          case 'Calendar':
            iconName =
              Platform.OS === 'ios'
                ? `ios-calendar${focused ? '' : '-outline'}`
                : 'md-calendar';
            break;
          case 'Notifications':
            iconName =
              Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications';
             break;
          case 'Add':
            iconName = Platform.OS === 'ios' ? `ios-add${focused ? '' : '-outline'}` : 'md-add';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
