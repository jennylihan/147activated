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

export default class MapsScreen extends React.Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };


   static navigationOptions = {
      title: 'My Path',
       header: null,
   };


   constructor() {

      super();

      this.state = {
         rows: [],
         switchValue: false,

      };

      this.state.popupText = "hi"
      this.state.popupTitle = "hi"
      this.state.popupCategory= "category"
      this.state.start = true

      //this.onValueChange = this.onValueChange.bind(this);

      var goals = {
       Professional: {
              name: 'Professional',
              priority: 2,
              icon: '../assets/images/hex_financialaid.png',
              tasks: [{text:'Apply for job at library',
                 category: 'Professional',
                 startdatetime: '2017-12-5',
                 enddatetime: '2017-12-5',
                 location: '1776 Educational Park Dr.',
                 checked: false,
                 notes: ' \n - Talk to Chelsea for job application \n  - Scan driver’s license"'
                 },
      {text:'Fill out resume template',
                 category: 'Professional',
                 startdatetime: '2017-12-9',
                 enddatetime: '2017-12-12',
                 location: 'Home',
                 checked: false,
                 notes: ' \n - Need to get unofficial transcript”'
            },
      {text:'Practice interview skills',
                 category: 'Professional',
                 startdatetime: '2017-12-20',
                 enddatetime: '2017-12-20',
                 location: 'Home',
                 checked: false,
                 notes: ' \n - Get list of questions from Mr. Doan'
            },

      {text:'Turn in application for tutoring job',
                 category: 'Professional',
                 startdatetime: '2017-12-2',
                 enddatetime: '2017-12-2',
                 location: 'Home',
                 checked: true,
                 notes: ' \n - Don’t forget to attach photo'
            },
      ]
              },
              FinAid: {
              name: 'Financial Aid',
              priority: 2,
              icon: '../assets/images/hex_financialaid.png',
              tasks: [
      {text:'Apply for FAFSA',
                 category: 'Financial Aid',
                 startdatetime: '2017-12-24',
                 enddatetime: '2017-12-24’',
                 location: 'Home',
      	         checked: false,
                 notes: '\n - Talk to Mom about tax forms \n  - Get SSN"'
                 },
      	{text:'Fill out CSS/Profile',
                 category: 'Financial Aid',
                 startdatetime: '2018-1-5',
                 enddatetime: '2018-1-5',
                 location: 'Home',
                 checked: false,
                 notes: '\n - Need to fill out the tax form"'
                 },
      	{text:'Turn counselor form for waiver',
                 category: 'Financial Aid',
                 startdatetime: '2018-1-8',
                 enddatetime: '2018-1-8',
                 location: 'C-303',
                 checked: false,
                 notes: '\n - Turn it into Mr. Burns’'
                 },
      	{text:'Fill out the tax form',
                 category: 'Financial Aid',
                 startdatetime: '2017-10-9',
                 enddatetime: '2017-10-9',
                 location: 'Home',
                 checked: true,
                 notes: '\n - Double check numbers with Dad’'
                 },


      ]
              },
              CollegeApps: {
              name: 'College Apps',
              priority: 2,
              icon: '../assets/images/hex_financialaid.png',
              tasks: [
      {text:'Talk to Mr. C for a letter of rec',
                 category: 'College Apps',
                 startdatetime: '2017-10-5',
                 enddatetime: '2017-10-5',
                 location: 'D-402',
                 checked: false,
                 notes: ' \n - Bring papers to office \n  - Check deadline date'
                 },
      {text:'Send score reports',
                 category: 'College Apps',
                 startdatetime: '2017-11-5',
                 enddatetime: '2017-11-5',
                 location: 'Home',
                 checked: false,
                 notes: ' \n - Check CollegeBoard'
                 },

      {text:'Turn in UC Apps',
                 category: 'College Apps',
                 startdatetime: '2017-11-27',
                 enddatetime: '2017-11-27',
                 location: 'Home',
                 checked: true,
                 notes: ' \n - Check over essay \n  - Make revisions to activities'
                 },

      ]
              },
              Summer: {
              name: 'Summer Opportunities',
              priority: 2,
              icon: '../assets/images/hex_financialaid.png',
              tasks: [{text:'Apply to SIMR',
                 category: 'Summer',
                 startdatetime: '2017-12-5',
                 enddatetime: '2017-12-5',
                 location: 'Home',
                 checked: false,
                 notes: '\n - Talk to Cindy about it \n  - Register on SlideRoom"'
               },
             {text:'Apply to COSMOS',
                 category: 'Summer',
                 startdatetime: '2017-12-25',
                 enddatetime: '2017-12-25',
                 location: 'Home',
                 checked: false,
                 notes: '\n - Write the essays for physics track"'
               },
             {text:'Apply to RISE',
                 category: 'Summer',
                 startdatetime: '2017-12-30',
                 enddatetime: '2017-12-30',
                 location: 'Home',
                 checked: false,
                 notes: '\n - Ask Mr. Elwell for letter of rec"'
               },
             {text:'Apply to Improv Camp',
                 category: 'Summer',
                 startdatetime: '2017-11-30',
                 enddatetime: '2017-11-30',
                 location: 'Home',
                 checked: true,
                 notes: '\n - Get info at the counselor’s office'
               },
      ]
      },
              SAT: {
              name: 'SAT',
              priority: 2,
              icon: '../assets/images/hex_financialaid.png',
              tasks: [{text:'Register for SAT',
                 category: 'SAT',
                 startdatetime: '2017-10-15',
                 enddatetime: '2017-10-15',
                 location: 'Home',
      	checked: false,
                 notes: ' \n - Check dates on college board"'
                 },
             {text:'E-mail SAT tutor about schedule',
                 category: 'SAT',
                 startdatetime: '2017-11-30',
                 enddatetime: '2017-11-30',
                 location: 'Home',
                 Checked: false,
                 notes: '\n - Email: aanguyen@gmail.com'
               },
             {text:'Do practice test',
                 category: 'SAT',
                 startdatetime: '2017-11-30',
                 enddatetime: '2017-11-30',
                 location: 'Home',
                 Checked: true,
                 notes: '\n - Practice test #1'
               },
             {text:'Buy blue book',
                 category: 'SAT',
                 startdatetime: '2017-12-3',
                 enddatetime: '2017-12-3',
                 location: 'Home',
                 Checked: true,
                 notes: '\n - Get money from Mom'
               },
      ]
              },
              Research: {
              name: 'Research',
              priority: 2,
              icon: '../assets/images/hex_financialaid.png',
              tasks: [{text:'Look into SCU scholarship packages',
                 category: 'Research',
                 startdatetime: '2017-10-5',
                 enddatetime: '2017-10-5',
                 location: 'Home',
                 checked: false,
                 notes: ' \n - Talk to Maria about forms \n  - Find pamphlets from college day"'
                 },
      {text:'Look into Blue and Gold scholarship at UCs',
                 category: 'Research',
                 startdatetime: '2017-11-15',
                 enddatetime: '2017-11-15',
                 location: 'Home',
                 checked: false,
                 notes: ' \n - Check Berkeley website \n  - Fill in initial form"'
                 },

      {text:'Find a mentor through STARS at school',
                 category: 'Research',
                 startdatetime: '2017-8-5',
                 enddatetime: '2017-8-5',
                 location: 'Homeroom C-412',
                 checked: true,
                 notes: ' \n - Mr. Barn has people to refer to"'
                 },

      ]
              },
            };


         try {
            AsyncStorage.setItem('@activated:goals', JSON.stringify(goals));
            console.log("set goals into storage");
            console.log(goals);
        } catch (error) {
          // Error saving data
            console.log("Failed to set data from storage");
        }
}
   componentWillReceiveProps(){
    this.renderButtons()



   }


   async componentWillMount() {
    this.renderButtons()


       await Expo.Font.loadAsync({
       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
     });

   }


  async showGoal(a){
      console.log('On click works')
      console.log(a);
      var goalObject = this.getGoalObj(a);
  }

async getGoalObj(a){
   try {
     const value =  await AsyncStorage.getItem('@activated:goals').then(function(t) {
           return  JSON.parse(t);
           var result = JSON.parse(t);
       });
    console.log("value");
     console.log(value);
     const { navigate } = this.props.navigation;
     navigate('GoalScreen', {goalobj: value[a]});
     return value;
   } catch (e) {
     // Error retrieving data
     console.log("Failed to get data from storage")

         console.log("Error", e.stack);
       console.log("Error", e.name);
       console.log("Error", e.message);
   }
}
async renderButtons (){
try {
  const value =  await AsyncStorage.getItem('@activated:goals').then(function(t) {
        return  JSON.parse(t);
    });
  if (value !== null){
    // We have data!!
    console.log(String(value));
    console.log(String(value.length))
  }
  else{ console.log(value);}

} catch (e) {
  // Error retrieving data
  console.log("Failed to get data from storage")

      console.log("Error", e.stack);
    console.log("Error", e.name);
    console.log("Error", e.message);
}


}


   render() {

let Arr = this.state.rows.map((a, i) => {

      switch (a.icon) {
    case 'pen-icon': return(
          <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity style={styles.CircleShapeView} onPress={() => this.showGoal(a)}>
         <Image source={require('../assets/images/pen-icon.png')} style={{resizeMode:'cover',width:100,height:100}}>
         </Image>
         </TouchableOpacity>
         </View>


      )
    case 'study-icon': return(
        <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity style={styles.CircleShapeView} onPress={() => this.showGoal(a)}>
         <Image source={require('../assets/images/study-icon.png')} style={{resizeMode:'cover',width:100,height:100}}>
         </Image>
         </TouchableOpacity>
         </View>
      )
    case 'test-icon': return (
       <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity  style={styles.CircleShapeView} onPress={() => this.showGoal(a)}>
         <Image source={require('../assets/images/test-icon.png')} style={{resizeMode:'cover',width:100,height:100}}>
         </Image>
         </TouchableOpacity>
         </View>
      )
    }

       <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity  style={styles.CircleShapeView} onPress={() => this.showGoal(a)}>
         <Image source={require('../assets/images/test-icon.png')} style={{resizeMode:'cover',width:100,height:100}}>
         </Image>
         </TouchableOpacity>
         </View>
    })


      return (


        <ImageBackground
         style={styles.backgroundImage}
         source={require('../assets/images/new_background.png')}>

            <View style={styles.header}>
            <View style={styles.imagebox}>
            <TouchableOpacity onPress={()=>{this.popupDialogSettings.show()}}>
            <Image style={styles.stretch}
                  source={require('../assets/images/settings.png')} />
            </TouchableOpacity>
            </View>
           <PopupDialog
              ref={(popupDialogSettings) => { this.popupDialogSettings = popupDialogSettings; }}
              height={500} >
              <View>

       <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>

         <SettingsList.Header headerStyle={{marginTop:15}}/>
         <SettingsList.Item
           title='Change Password'
           onPress={() => Alert.alert('Route To Notifications Page')}
         />
         <SettingsList.Item

           title='Public Profile'
           titleInfo='Off'
           titleInfoStyle={styles.titleInfoStyle}
           onPress={() => Alert.alert('Route to Blutooth Page')}
         />
         <SettingsList.Item
           title='Notifications'
           onPress={() => Alert.alert('Route To Control Center Page')}
         />
         <SettingsList.Header headerStyle={{marginTop:15}}/>
         <SettingsList.Item
           title='General'
           onPress={() => Alert.alert('Route To General Page')}
         />
         <SettingsList.Item
           title='Tutorial'
           onPress={() => Alert.alert('Route To General Page')}
         />
         <SettingsList.Item
           title='Help'
           onPress={() => Alert.alert('Route To General Page')}
         />
         <SettingsList.Item
           title='Privacy Policy'
           onPress={() => Alert.alert('Route To General Page')}
         />
       </SettingsList>


                 <Button full warning
                 onPress={() => {this.popupDialogSettings.dismiss();}} >
                  <Text>Save</Text>
                 </Button>

              </View>
           </PopupDialog>




            <View>
            <Text style={styles.instruction_text}>
             My Path to College  </Text>
             </View>
            </View>


            <Grid>



           <Col>


                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("Professional")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("Professional")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>




          </Col>
           <Col>


                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("FinAid")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("FinAid")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("CollegeApps")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("CollegeApps")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("SAT")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("SAT")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("SAT")}></Row>



          </Col>
                     <Col>


                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("Summer")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("Summer")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("Research")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,88,34,0)' }} onPress={() => this.showGoal("Research")}></Row>
                    <Row style={{ height: 50, backgroundColor: 'rgba(366,255,34,0)' }}></Row>


          </Col>





</Grid>

         </ImageBackground>


      );
   }

   pressAddTask () {
      const { navigate } = this.props.navigation;
      navigate('Add');
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
      backgroundColor: '#34495e',
      paddingVertical: 15,
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
