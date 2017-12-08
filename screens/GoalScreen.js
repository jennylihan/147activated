import React from 'react';
import {
   AppRegistry,
   Image,
   Platform,
   StyleSheet,
   TouchableOpacity,
   View,
   AlertIOS,
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

import { Container, Header, Body, Content, Card, CardItem, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Note} from 'native-base';

import CheckBox from 'react-native-modest-checkbox';

export default class GoalScreen extends React.Component {
   static navigationOptions = ({ navigation }) => ({
    title: '',
  });

   constructor(props) {
      super(props);
      this.state = {
         startdatetime: null,
         enddatetime: null,
         text: '',
         location: '',
         notes: '',
         check1: false,
         check2: false,
         check3: false,
         check4: false,
      };
   }

   async componentWillMount() {
    console.log("i'm in will mount")
   }

   render() {
     const { params } = this.props.navigation.state;

     var items = params.goalobj.tasks;
      return (
         <ScrollView behavior="padding" style={styles.container}>
            <Container>
              <Content>
              <Text style={styles.title}>{params.goalobj.name}</Text>
                    <List dataArray={items}
                      renderRow={(item) =>
                        <ListItem>
                          <Thumbnail square size={80} source={{uri: item.icon}} />
                          <Body>
                          <CheckBox
                            label={item.text}
                            checked={item.checked}
                            onChange={(checked) => this.onChecked.bind(this, item)}
                          />

                          <Text style={styles.subtext}>
                           {item.notes}
                        </Text>
                           <Text style={styles.subtext}>

                          </Text>

                        <Text style={styles.smaller_text}>Start: {item.startdatetime}</Text>
                        <Text style={styles.smaller_text}>End: {item.enddatetime}</Text>
                          </Body>
                          <Right>
                          <Button
                              onPress={this.onPress.bind(this, item)}
                              style={{backgroundColor: '#34495e'}}
                          >
                          <Text style={{color: 'white'}}>{'>'}</Text>
                          </Button>
                          </Right>
                        </ListItem>
                      }>
                    </List>
                    </Content>
                  </Container>
         </ScrollView>
      );
   }
   onPress(item) {
     const { navigate } = this.props.navigation;
     navigate('TaskScreen', {taskName: item.text, itemobj: item});
   }
   onChange(item) {
     AlertIOS.alert(
         'New Task Saved!',
           'Name: ' + this.state.text,
        [
          {text: 'View', onPress: () => this.props.navigation.navigate('TaskScreen', {taskName: this.state.text, itemobj: newtask})},
          {text: 'Okay', onPress: () => this.props.navigation.navigate('MyMap')},
        ],
     );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   button:{
     backgroundColor: 'transparent',
   },
   title: {
      color: '#fff',
     paddingTop: 10,
     paddingBottom: 10,
     fontSize: 20,
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
   padding:10,
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
