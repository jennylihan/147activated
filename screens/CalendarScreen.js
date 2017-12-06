import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Body, Left, Right, Note} from 'native-base';
import {
   AppRegistry,
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   AsyncStorage,
   View
} from 'react-native';
import { WebBrowser } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import Button from '../components/Button';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import { MonoText } from '../components/StyledText';

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

   render() {
      {
        var items = [{text:'Register for SAT',
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





                  <Container>
                    <Content>
                      <List dataArray={items}
                        renderRow={(item) =>
                          <ListItem>
                            <Thumbnail square size={80} source={{uri: item.icon}} />
                            <Body>
                            <Text style={styles.notes_text}>{item.text}</Text>
                            <Text style={styles.smaller_text}>{item.category}</Text>

                            </Body>
                            <Right>
                            <Button
                                onPress={this.onPress.bind(this)}
                            >
                            <Text style={{color: 'steelblue'}}>{'>'}</Text>
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
   }
   onPress(item) {
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
      borderTopWidth: 1,
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
