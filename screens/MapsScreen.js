import React, { Component } from 'react';
import {
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   TextInput,
   KeyboardAvoidingView,
   AsyncStorage,
   Picker,
   ImageBackground,
   PanResponder,
   Animated,
   Button,
   Alert, AppRegistry,
   TouchableHighlight,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';



export default class MapsScreen extends React.Component {
   static navigationOptions = {
      header: null,
   };
   constructor() {
      super();


   }

   async componentWillMount() {
     await Expo.Font.loadAsync({
       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
     });
   }


   onclick = () => {
      console.log('On click works')
   };



   render() {
      const { params } = this.props.navigation.state;

      if (this.props.navigation.state.params !== undefined){

      if ('category' in this.props.navigation.state.params){

             alert(this.props.navigation.state.params.category);

        }

      }

      return (



         <ImageBackground
         style={styles.backgroundImage}
         source={require('../assets/images/roadmap.png')}>



         <View style={{position:"relative",flex:1,left:75,top:20,right:20,bottom:20}}>
         <TouchableOpacity onPress={this.onclick}>

         <Image source={require('../assets/images/icons8-graduation-cap-50.png')} style={{resizeMode:'cover',width:50,height:50}}>
         </Image>
         </TouchableOpacity>
         </View>



         <View style={{position:"relative",flex:1,left:125,top:20,right:20,bottom:20}}>
         <TouchableOpacity onPress={this.onclick}>
         <Image source={require('../assets/images/icons8-dossier-50.png')} style={{resizeMode:'cover',width:50,height:50}}>
         </Image>
         </TouchableOpacity>
         </View>
         <View style={{position:"relative",flex:1,left:240,top:20,right:20,bottom:20}}>
         <TouchableOpacity onPress={this.onclick}>
         <Image source={require('../assets/images/icons8-exam-50.png')} style={{resizeMode:'cover',width:50,height:50}}>
         </Image>
         </TouchableOpacity>
         </View>


         <View style={{position:"relative",flex:1,left:220,top:20,right:20,bottom:20}}>

         <TouchableOpacity onPress={this.onclick}>

         <Image source={require('../assets/images/icons8-crowdfunding-40.png')} style={{resizeMode:'cover',width:50,height:50}}>
         </Image>
         </TouchableOpacity>
         </View>



         <View style={{position:"relative",flex:1,left:115,top:20,right:20,bottom:20}}>
         <TouchableOpacity onPress={this.onclick}>
         <Image source={require('../assets/images/icons8-study-50.png')} style={{resizeMode:'cover',width:50,height:50}}>
         </Image>
         </TouchableOpacity>
         </View>


         <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
         {/* Rest of the app comes ABOVE the action button component !*/}
         <ActionButton buttonColor="rgba(231,76,60,1)">
         <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("task tapped!")}>
         <Icon name="ios-create" style={styles.actionButtonIcon} />
         </ActionButton.Item>
         <ActionButton.Item buttonColor='#3498db' title="New Goal" onPress={() => {}}>
         <Icon name="ios-navigate" style={styles.actionButtonIcon} />
         </ActionButton.Item>
         </ActionButton>
         </View>



         </ImageBackground>


      );
   }

}



const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f1c40f',
   },

   actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
   },




   titleContainer: {
      padding: 10,
      //flexGrow: 1,
   },

   backgroundImage: {
      flex: 1,
      width: null, height: null,
      //resizeMode: 'stretch', // or 'stretch'
   },

   formTitle: {
      color: '#FFF',
      marginTop: 25,
      fontSize: 40,
      textAlign: 'left',
      opacity: 0.9,
   },
   inputField: {
      padding: 7,
      fontSize: 25,
      marginBottom: 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
   },

   formContainer: {
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
   },

   buttonContainer: {
      backgroundColor: '#34495e',
      paddingVertical: 15,
      marginTop: 15,
   },
   buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700',
   },

});
