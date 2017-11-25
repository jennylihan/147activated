


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

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';




   export default class MapsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Map',
  };
 constructor() {
    super();

  }

    onclick = () => {
    console.log('On click works')
};



   onValueChange(key, value) {
      console.log(key+':'+value)
      this.setState({category: value});
   }
   render() {

    
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
           



          </ImageBackground>

          
      );
   }

}



const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f1c40f',
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
