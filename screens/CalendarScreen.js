import React from 'react';
import {
   AppRegistry,
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import Button from '../components/Button';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import { MonoText } from '../components/StyledText';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class CalendarScreen extends React.Component {
   static navigationOptions = {
      header: null,
      // tabBarLabel: 'Screen 1',
      // drawerIcon: ({tintColor}) => {
      //   return (
      //     <MaterialIcons
      //       name="calendar"
      //       size={24}
      //       style={{color: tintColor}}
      //     >
      //     </MaterialIcons>
      //   );
      // }
   };


   async componentWillMount() {
      await Expo.Font.loadAsync({
         FontAwesome: require("../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf")
      });

      this.setState({fontLoaded: true});
   }


   render() {

         return (
           // <View style= {
           //   {
           //     flex:1,
           //     justifyContent: 'center',
           //     alignItems: 'center'
           //   }
           // }>
           //  <Text style={{fontSize: 30, color: 'green'}}>Screen 1</Text>
           //  <Button
           //    onPress={() => this.props.navigation.navigate('DrawerOpen')}
           //    title="Open DrawNavigator"
           //  />
           //  </View>

            <ScrollView style={styles.container}>
            <View>
                      <CalendarStrip
                          calendarAnimation={{type: 'sequence', duration: 30}}
                          daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                          style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                          calendarHeaderStyle={{color: 'white'}}
                          calendarColor={'#f1c40f'}
                          dateNumberStyle={{color: 'white'}}
                          dateNameStyle={{color: 'white'}}
                          disabledDateNameStyle={{color: 'grey'}}
                          disabledDateNumberStyle={{color: 'grey'}}
                          iconContainer={{flex: 0.1}}
                      />
                  </View>

                  <Button
                  noDefaultStyles={true}
                  onPress={this.onPress.bind(this)}
                 >
                  <View style={styles.notes}>
                     <View style={styles.notes_notes}>
                          <Text style={styles.notes_text_done}>Turn in UC applications!!!</Text>
                          <Text style={styles.smaller_text}>College Applications</Text>
                     </View>
                     <View style={styles.notes_selected_date}>
                      <Text style={styles.small_text_done}>4:00 PM</Text>
                      <Text style={styles.big_text_done}>29</Text>
                         <View style={styles.inline}>
                             <Text style={styles.small_text_done}>WED</Text>
                         </View>
                     </View>
                  </View>
                  	</Button>


                     <Button
                     noDefaultStyles={true}
                     onPress={this.onPress.bind(this)}
                    >
                  <View style={styles.notes}>
                     <View style={styles.notes_notes}>
                          <Text style={styles.notes_text_done}>Work on FAFSA</Text>
                          <Text style={styles.smaller_text}>Financial Aid</Text>
                     </View>
                     <View style={styles.notes_selected_date}>
                      <Text style={styles.small_text_done}>7:00 PM</Text>
                      <Text style={styles.big_text_done}>30</Text>
                         <View style={styles.inline}>
                             <Text style={styles.small_text_done}>THUR</Text>
                         </View>
                     </View>
                  </View>
                     </Button>

            <Button
               noDefaultStyles={true}
               onPress={this.onPress.bind(this)}
            >
            <View style={styles.notes}>
               <View style={styles.notes_notes}>
                    <Text style={styles.notes_text}>Ace my presentation in CS class.</Text>
                    <Text style={styles.smaller_text}>AP CS</Text>
               </View>
               <View style={styles.notes_selected_date}>
                <Text style={styles.small_text}>2:00 PM</Text>
                <Text style={styles.big_text}>1</Text>
                   <View style={styles.inline}>
                       <Text style={styles.small_text}>FRI</Text>
                   </View>
               </View>
            </View>
            </Button>

            </ScrollView>
         );

   }
   onPress() {
      console.log('wassup');
   }

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   header: {
      backgroundColor: '#329BCB',
      flexDirection: 'row',
      padding: 20
   },
   header_item: {
      flex: 1
   },
   header_button: {
      flexDirection: 'row'
   },
   text_center: {
      textAlign: 'center'
   },
   text_right: {
      textAlign: 'right'
   },
   header_text: {
      color: '#fff',
      fontSize: 20
   },
   bold_text: {
      fontWeight: 'bold'
   },

   notes: {
    marginTop: 10,
    padding: 20,
    borderColor: '#F5F5F5',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#FAFAFA'
    },

    notes_notes: {
    flex: 3
   },
   notes_text: {
       fontSize: 18
   },

   notes_selected_date: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column'
   },
   small_text: {
       fontSize: 15,
   },
   big_text: {
       fontSize: 50,
       fontWeight: 'bold'
   },
   inline: {
       flexDirection: 'row'
   },
   smaller_text: {

      fontSize: 15,
      color: '#c5c5c5',
      position: 'absolute',
      bottom: 0,
      fontWeight: 'bold',
   },
   notes_text_done: {
      fontSize: 18,
      color: '#c5c5c5',
   },
   big_text_done: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#c5c5c5',
   },
   small_text_done: {
      fontSize: 15,
      color: '#c5c5c5',
   },


});

AppRegistry.registerComponent('Example', () => Example);
