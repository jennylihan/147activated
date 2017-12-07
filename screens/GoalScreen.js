import React from 'react';
import {
   AppRegistry,
   Image,
   Platform,
   StyleSheet,
   TouchableOpacity,
   View,
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
   AsyncStorage,
   ListView,
} from 'react-native';

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import MainTabNavigator from '../navigation/MainTabNavigator';
import { Container, Header, Body, Content, Card, CardItem, Button, Icon, List, ListItem, Text} from 'native-base';

import CheckBox from 'react-native-modest-checkbox';

export default class GoalScreen extends React.Component {
   static navigationOptions = {
      header: null,
   };


   constructor(props) {
      super(props);
      this.state = {
         startdatetime: null,
         enddatetime: null,
         selectedGoal: 'Financial Aid',
         text: '',
         location: '',
         notes: '',
         check1: false,
         check2: false,
         check3: false,
         check4: false,
      };
   }

   render() {
      return (
         <ScrollView behavior="padding" style={styles.container}>
            <Container>
              <Content>
              <Text style={styles.title}>{this.state.selectedGoal}</Text>

              <Card>
                 <CardItem>
                   <Body>
                   <View style={styles.notes}>
                      <View style={styles.notes_notes}>
                           <Text style={styles.notes_text}>
                           Request Stanford waiver
                           </Text>

                           <Text style={styles.subtext}>
                              Mr. Burns has it!
                           </Text>
                           <Text style={styles.smaller_text}>Office C303</Text>
                      </View>
                      <View style={styles.notes_selected_date}>
                        <Text style={styles.small_text}>START</Text>
                        <Text style={styles.big_text}>TUE, 10/9</Text>
                        <Text style={styles.small_text}>END</Text>
                        <Text style={styles.big_text}>TUE, 10/9</Text>
                        </View>
                   </View>



                   <View style={styles.notes}>
                      <View style={styles.notes_notes}>
                           <Text style={styles.notes_text}>
                           Fill out FAFSA
                           </Text>

                           <Text style={styles.subtext}>
                              Ask parents for tax forms.
                           </Text>
                           <Text style={styles.smaller_text}>Home</Text>
                      </View>
                      <View style={styles.notes_selected_date}>
                         <Text style={styles.small_text}>START</Text>
                         <Text style={styles.big_text}>FRI, 12/1</Text>
                         <Text style={styles.small_text}>END</Text>
                         <Text style={styles.big_text}>MON, 12/4</Text>
                         </View>
                   </View>

                   <View style={styles.notes}>
                      <View style={styles.notes_notes}>
                           <Text style={styles.notes_text}>
                           Fill out CSS/Profile
                           </Text>

                           <Text style={styles.subtext}>
                              Ask parents for tax forms.
                           </Text>
                           <Text style={styles.smaller_text}>Home</Text>
                      </View>
                      <View style={styles.notes_selected_date}>
                        <Text style={styles.small_text}>START</Text>
                        <Text style={styles.big_text}>SAT, 1/4</Text>
                        <Text style={styles.small_text}>END</Text>
                        <Text style={styles.big_text}>TUES, 1/7</Text>
                        </View>
                   </View>



                   </Body>
                 </CardItem>
              </Card>
              </Content>
            </Container>

         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   title: {
    color: '#fff',
     paddingTop: 30,
     paddingBottom: 20,
     fontSize: 40,
     textAlign: 'center',
     backgroundColor: '#f1c40f',
  },
  checkbox: {
     paddingLeft: 10,
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

});
