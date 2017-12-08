import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Login from '../screens/Login'
import AddScreen from '../screens/AddScreen'
import GoalScreen from '../screens/GoalScreen'
import TaskScreen from '../screens/TaskScreen'
import tutorial1 from '../screens/tutorial1'
import tutorial2 from '../screens/tutorial2'
import tutorial3 from '../screens/tutorial3'
import tutorial4 from '../screens/tutorial4'
import tutorial5 from '../screens/tutorial5'
import tutorial6 from '../screens/tutorial6'
import tutorial7 from '../screens/tutorial7'
import tutorial8 from '../screens/tutorial8'

const RootStackNavigator = StackNavigator(
  {
    LoginScreen: {
      screen: Login,
    },
    Main: {
      screen: MainTabNavigator,
    },
    Add: {
      screen: AddScreen,
    },
    GoalScreen: {
      screen: GoalScreen,
    },
    TaskScreen: {
      screen: TaskScreen,
    },
    Tutorial1: {
      screen: tutorial1,
    },
    Tutorial2: {
      screen: tutorial2,
    },
    Tutorial3: {
      screen: tutorial3,
    },
    Tutorial4: {
      screen: tutorial4,
    },
    Tutorial5: {
      screen: tutorial5,
    },
    Tutorial6: {
      screen: tutorial6,
    },
    Tutorial7: {
      screen: tutorial7,
    },
    Tutorial8: {
      screen: tutorial8,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
