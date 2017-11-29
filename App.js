import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, KeyboardAvoidingView, AppRegistry } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Login from './screens/Login';

export default class App extends React.Component {
   state = {
      isLoadingComplete: false,
   };

   render() {
      if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
         return (
            <Login />
         );
      } else {
         return (
            <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

            <ActionButton buttonColor="rgba(231,76,60,1)">
               <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
               <Icon name="md-create" style={styles.actionButtonIcon} />
               </ActionButton.Item>
               <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
               <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
               </ActionButton.Item>
               <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
               <Icon name="md-done-all" style={styles.actionButtonIcon} />
               </ActionButton.Item>
            </ActionButton>

            <RootNavigation />
            </View>
         );
      }
   }

   _loadResourcesAsync = async () => {
      return Promise.all([
         Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
         ]),
         Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free
            // to remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
         }),
      ]);
   };

   _handleLoadingError = error => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
   };

   _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
   };
}

const styles = StyleSheet.create({
   actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   statusBarUnderlay: {
      height: 24,
      backgroundColor: 'rgba(0,0,0,0.2)',
   },
});
