import React from 'react';
import {
   AppRegistry,
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { range } from 'lodash';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import { MonoText } from '../components/StyledText';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Body, Content, Card, CardItem, Button, Icon, List, ListItem, Text} from 'native-base';


export default class CalendarScreen extends React.Component {
   static navigationOptions = {
      header: null,
   };


   async componentWillMount() {
      await Expo.Font.loadAsync({
         FontAwesome: require("../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf")
      });

      this.setState({fontLoaded: true});
   }

   constructor(props) {
      super(props);
      this.state = {
         startdatetime: null,
         enddatetime: null,
         selectedGoal: 'Financial Aid',
         text: '',
         location: '',
         notes: '',
      };
   }


   render() {

         return (


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
                  	</Button>


                     <View style={styles.notes}>
                       <View style={styles.notes_notes}>
                             <Text style={styles.notes_text_done}>
                             Request Stanford waiver
                             </Text>

                             <Text style={styles.subtext}>
                                Mr. Burns has it!
                             </Text>
                                <Text style={styles.subtext}>
                              Office C-303
                              </Text>
                             <Text style={styles.smaller_text}>College Applications</Text>
                       </View>
                       <View style={styles.notes_selected_date}>
                          <Text style={styles.small_text_done}>START</Text>
                          <Text style={styles.big_text_done}>TUE, 12/5</Text>
                          <Text style={styles.small_text_done}>END</Text>
                          <Text style={styles.big_text_done}>TUE, 12/5</Text>
                          </View>
                    </View>



                    <View style={styles.notes}>
                       <View style={styles.notes_notes}>
                             <Text style={styles.notes_text}>
                            Fill in FAFSA
                             </Text>

                             <Text style={styles.subtext}>
                                Ask parents for tax forms.
                             </Text>
                             <Text style={styles.smaller_text}>Financial Aid</Text>
                       </View>
                       <View style={styles.notes_selected_date}>
                           <Text style={styles.small_text}>START</Text>
                           <Text style={styles.big_text}>FRI, 12/8</Text>
                           <Text style={styles.small_text}>END</Text>
                           <Text style={styles.big_text}>SAT, 12/9</Text>
                           </View>
                    </View>

                    <View style={styles.notes}>
                       <View style={styles.notes_notes}>
                             <Text style={styles.notes_text}>
                             Finish resume
                             </Text>

                             <Text style={styles.subtext}>
                              Look up template from counselor.
                             </Text>
                             <Text style={styles.smaller_text}>Professional Work</Text>
                       </View>
                       <View style={styles.notes_selected_date}>
                          <Text style={styles.small_text}>START</Text>
                          <Text style={styles.big_text}>SUN, 12/10</Text>
                          <Text style={styles.small_text}>END</Text>
                          <Text style={styles.big_text}>SUN, 12/10</Text>
                          </View>
                    </View>



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
    flex: 1
   },
   notes_text: {
       fontSize: 18
   },
   subtext: {
     marginTop: 5,
     fontSize: 15,
     color: '#727272',
   },

   notes_selected_date: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column'
   },
   small_text: {
       fontSize: 15,
       padding: 2,
       textAlign: 'right',
   },
   big_text: {
       fontSize: 30,
       fontWeight: 'bold',
       textAlign: 'right',
   },
   big_text_end: {
       fontSize: 30,
       fontWeight: 'bold',
       textAlign: 'right',
       color: '#f1c40f',
   },
   inline: {
       flexDirection: 'row'
   },
   smaller_text: {

      fontSize: 15,
      color: '#c5c5c5',
      position: 'absolute',
      bottom: 0,
      marginTop: 4,
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

   notes_text_done: {
      fontSize: 18,
      color: '#c5c5c5',
   },
   big_text_done: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#c5c5c5',
   },
   small_text_done: {
      fontSize: 15,
      color: '#c5c5c5',
   },

});

AppRegistry.registerComponent('Example', () => Example);
