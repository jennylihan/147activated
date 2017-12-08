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

export default class TaskScreen extends React.Component {
   static navigationOptions = {
      title: 'Task Details',
   };
   constructor(props) {
      super(props);
      this.state = {
         startdatetime: null,
         enddatetime: null,
         selectedGoal: 'hey',
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
     const { params } = this.props.navigation.state;
      return (
         <ScrollView behavior="padding" style={styles.container}>
            <Container>
              <Content>
              <Text style={styles.title}>{this.state.selectedGoal}</Text>

              <Card>
                 <CardItem>
                   <Body>
                   <Text>Blah blah task details</Text>
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
