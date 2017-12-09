import React from 'react';
import {
   AppRegistry,
   AlertIOS,
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
import RootNavigation from '../navigation/RootNavigation';
import { Container, Header, Body, Content, Card, CardItem, Thumbnail, Button, Left, Right, Icon, List, ListItem, Text} from 'native-base';

import CheckBox from 'react-native-modest-checkbox';

export default class TaskScreen extends React.Component {
   static navigationOptions = {
      title: 'Task Details',
   };
   constructor(props) {
      super(props);
      this.state = {
         taskName: '',
         startdatetime: null,
         enddatetime: null,
         text: '',
         location: '',
         notes: '',
      };
   }
   onPress () {
     AlertIOS.prompt(
       'Share your task?',
       'Choose someone below:',
       [
         {
           text: 'Cancel',
           onPress: () => console.log('Cancel Pressed'),
           style: 'cancel',
         },
         {
           text: 'Share',
           onPress: () => AlertIOS.alert('Shared Successfully!', 'Better get to work. :)', [{text:'Ok'}]),
         },
       ]);
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView behavior="padding" style={styles.container}>
           <Content>
           <Text style={styles.title}>{params.taskName}</Text>
           </Content>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.big_text_done}>GOAL:</Text>
                <Text>{params.itemobj.category}</Text>
                <Text style={styles.big_text_done}>LOCATION:</Text>
                <Text>{params.itemobj.location}</Text>
                <Text style={styles.big_text_done}>START DATE:</Text>
                <Text>{params.itemobj.startdatetime}</Text>
                <Text style={styles.big_text_done}>END DATE:</Text>
                <Text>{params.itemobj.enddatetime}</Text>
                <Text style={styles.big_text_done}>NOTES:</Text>
                <Text>{params.itemobj.notes}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}} onPress={this.onPress.bind(this)} >
                  <Icon name='paper-plane' />
                  <Text>Share</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name='ios-color-wand' />
                  <Text>Edit</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
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
     paddingTop: 10,
     paddingBottom: 10,
     fontSize: 40,
     fontWeight: 'bold',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c5c5c5',
},
small_text_done: {
    fontSize: 15,
    color: '#c5c5c5',
},

});
