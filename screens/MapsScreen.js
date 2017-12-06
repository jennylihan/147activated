import React, { Component } from 'react';
import PopupDialog from 'react-native-popup-dialog';
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
import { slide as Menu } from 'react-burger-menu'

import { MonoText } from '../components/StyledText';
import MainTabNavigator from '../navigation/MainTabNavigator';
import RootNavigation from '../navigation/RootNavigation';

   let index = 0

export default class MapsScreen extends React.Component {
   static navigationOptions = {
      title: 'My Map',
       header: null
   };


   constructor() {
      super();

      this.state = { rows: [] };

      this.state.popupText = "hi"
      this.state.popupTitle = "hi"
      this.state.popupCategory= "category"
      this.state.start = true


       tasks = [{text:'Register for SAT',
            category: 'SAT',
            startdatetime: '2017-10-5',
            enddatetime: '2017-10-5',
            icon: 'https://elitepreptokyo.files.wordpress.com/2017/02/sat-icon_974ab022-245c-4a1d-9e40-0b46924ff86c_large.png?w=640',
            notes: ' Notes: \n - check schedule \n  - find out college "score sent by dates"'
          },

          {text:'Take PSAT',
            category: 'SAT',
            startdatetime: '2017-10-5',
            enddatetime: '2017-10-5',
            icon: 'https://elitepreptokyo.files.wordpress.com/2017/02/sat-icon_974ab022-245c-4a1d-9e40-0b46924ff86c_large.png?w=640',
            notes: ' Notes: \n - Get lots or rest! \n  - eat breakfast!'
          },

          {text:'Research Summer Internships',
            category: 'Summer Opportunities',
            startdatetime: '2017-10-5',
            enddatetime: '2017-12-5',
            icon: 'http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Beach-icon.png',
            notes: ' Notes: \n - Get parents income information \n  - get college id codes'
          },
          {text:'Visit College Counselor',
            category: 'Professional Work',
            startdatetime: '2017-10-5',
            enddatetime: '2017-12-5',
            icon: 'http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Beach-icon.png',
            notes: ' Notes: \n - Get parents income information \n  - get college id codes'
          }
          ];

         try {
    AsyncStorage.setItem('@activated:tasks', JSON.stringify(tasks));
} catch (error) {
  // Error saving data
    console.log("Failed to set data from storage")

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


   showTask = (a) => {
      //console.log('On click works')
      //console.log(a)

       display = "Start Date: "+a.startdatetime+" \n End Date: "+a.startdatetime

      this.state.popupText = display

        this.setState({ popupText: this.state.popupText })

        this.state.popupTitle = a.text

        this.setState({ popupTitle : this.state.popupTitle  })

        this.state.popupCategory= a.category

        this.setState({ popupCategory : this.state.popupCategory  })

        this.state.popupNotes= a.notes

        this.setState({ popupNotes : this.state.popupNotes  })


      this.popupDialog.show()

   };


async renderButtons(){
try {
  const value =  await AsyncStorage.getItem('@activated:tasks').then(function(t) {
        return  JSON.parse(t);
    });
  if (value !== null){
    // We have data!!
  //  console.log(String(value));
  //  console.log(String(value.length))

  for( let i = this.state.rows.length; i < value.length; i++) {
     this.state.rows.push(value[i])
  }


  this.setState({ rows: this.state.rows })

  console.log(this.state.rows)




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
         <TouchableOpacity style={styles.CircleShapeView} onPress={() => this.showTask(a)}>
         <Image source={require('../assets/images/pen-icon.png')} style={{resizeMode:'cover',width:40,height:40}}>
         </Image>
         </TouchableOpacity>
         </View>


      )
    case 'study-icon': return(
        <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity style={styles.CircleShapeView} onPress={() => this.showTask(a)}>
         <Image source={require('../assets/images/study-icon.png')} style={{resizeMode:'cover',width:40,height:40}}>
         </Image>
         </TouchableOpacity>
         </View>



      )
    case 'test-icon': return (
       <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity  style={styles.CircleShapeView} onPress={() => this.showTask(a)}>
         <Image source={require('../assets/images/test-icon.png')} style={{resizeMode:'cover',width:40,height:40}}>
         </Image>
         </TouchableOpacity>
         </View>



      )
    }

       <View key={i} style={{position:"relative",flex:1,left:(i % 2 + 2)*100 -90,top:20,right:20,bottom:20}}>
         <TouchableOpacity  style={styles.CircleShapeView} onPress={() => this.showTask(a)}>
         <Image source={require('../assets/images/test-icon.png')} style={{resizeMode:'cover',width:40,height:40}}>
         </Image>
         </TouchableOpacity>
         </View>
    })


      return (



        <ImageBackground
         style={styles.backgroundImage}
         source={require('../assets/images/new_background.png')}>


            <View style={styles.header}>
            <Text style={styles.instruction_text}>My College Roadmap: Junior Year </Text>
            </View>

         


  <PopupDialog dialogStyle={{backgroundColor: 'rgba(255,255,255,0.85)'}}
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        width={250}
        height={350}




  >
    <View style= {{backgroundColor: 'transparent', padding: 25}}>
      <Text style={styles.taskTitle}> {this.state.popupTitle}</Text>
      <Text style={styles.taskText}> {this.state.popupCategory}</Text>
      <Text style={styles.taskCategory}> {this.state.popupText}</Text>
      <Text style={styles.taskNotes}> {this.state.popupNotes}</Text>
    </View>

  </PopupDialog>

        <View style={{flex:1, backgroundColor: 'transparent'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
         <ActionButton buttonColor="#f1c40f">
         <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.pressAddTask.bind(this)}>
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

       instruction_text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '700',
    },

        header: {
        opacity: 0.8,
        flexDirection: 'row',
        backgroundColor: '#f1c40f',
        padding: 25,
        justifyContent: 'center',
        height: 80,



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
