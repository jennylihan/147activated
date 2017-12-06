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
import { Container, Header, Content, Button, Icon, List, ListItem, Text, CheckBox} from 'native-base';


const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class GoalScreen extends React.Component {
   static navigationOptions = {
      // header: null,
   };


   constructor(props) {
      super(props);
       this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
         startdatetime: null,
         enddatetime: null,
         selectedGoal: 'Financial Aid',
         text: '',
         location: '',
         notes: '',
         basic: true,
         listViewData: datas,
      };
   }

   deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
   }

   render() {
       const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      return (
         <ScrollView behavior="padding" style={styles.container}>
            <Container>
              <Content>
              <Text style={styles.title}>{this.state.selectedGoal}</Text>

              <List
                 dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                 renderRow={data =>
                   <ListItem style={styles.checkbox}>
                      <CheckBox checked={false} />
                      <Text> {data} </Text>
                   </ListItem>}
                 renderLeftHiddenRow={data =>
                   <Button full onPress={() => alert(data)}>
                     <Icon active name="information-circle" />
                   </Button>}
                 renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                   <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                     <Icon active name="trash" />
                   </Button>}
                 leftOpenValue={75}
                 rightOpenValue={-75}
               />



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
     paddingTop: 20,
     paddingBottom: 20,
     fontSize: 40,
     textAlign: 'center',
     backgroundColor: '#f1c40f',
  },
  checkbox: {
     paddingLeft: 10,
 }
});
