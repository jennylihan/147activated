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
   Alert, AppRegistry,
   TouchableHighlight,
} from 'react-native';

import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import WebBrowser from 'expo';
import { slide as Menu } from 'react-burger-menu'

import MonoText from '../components/StyledText';
import MainTabNavigator from '../navigation/MainTabNavigator';
import RootNavigation from '../navigation/RootNavigation';
import SettingsList from 'react-native-settings-list';

import { Container, Header, Left, Right, Icon, Drawer, Grid, Col, Row,Button } from 'native-base';
import SideBar from '../SideBar';
import PopupDialog from 'react-native-popup-dialog';

const SideMenu = require('react-native-side-menu');

   let index = 0

export default class tutorial2 extends React.Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };


   static navigationOptions = {
      title: 'Tutorial 2',
       header: null,
   };


   constructor() {

      super();

      this.state = {
         rows: [],
         switchValue: false,
      };
      //this.onValueChange = this.onValueChange.bind(this);
  }

  async goNext () {
    console.log("clicking")
     const { navigate } = this.props.navigation;
     navigate('Tutorial3');
  }
   render() {
      return (

        <ImageBackground
         style={styles.backgroundImage}
         source={require('../assets/images/tutorial2.png')}>


                     <Grid>



                    <Col>


                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>




                   </Col>
                    <Col>


                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }}  onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }}  onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }}  onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }}  onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}  onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }}  onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }}  onPress={() => this.goNext()}></Row>



                   </Col>
                              <Col>


                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.goNext()}></Row>
                             <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }} onPress={() => this.goNext()}></Row>


                   </Col>





         </Grid>
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
   stretch: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
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
      backgroundColor: 'transparent',
      paddingVertical: 100,
      marginTop: 15,
   },
   buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700',
   },

   taskText: {
      textAlign: 'center',
      color: '#34495e',
      fontWeight: '700',
      marginTop: 30,
   },

      taskTitle: {
      textAlign: 'center',
      color: '#f1c40f',
      fontSize: 22,
      fontFamily: 'Avenir',
   },

   taskCategory: {
      textAlign: 'center',
      color: '#34495e',
      fontSize: 15,
      marginTop: 15,
      fontFamily: 'Avenir',
   },

      taskNotes: {
      color: '#34495e',
      fontSize: 15,
      marginTop: 15,
      fontFamily: 'Avenir',

   },

   imagebox: {
      flex: 1
   },

       instruction_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    stretch: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 10,
},
        header: {
         backgroundColor: '#f1c40f',
         paddingBottom: 15,
         paddingTop: 25,
         flexDirection: 'row',
    },

  CircleShapeView: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefed',
    shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
},


});
