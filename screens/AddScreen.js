import React from 'react';
import {
   AppRegistry,
   Image,
   Platform,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   TextInput,
   KeyboardAvoidingView,
   ScrollView,
   AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import MainTabNavigator from '../navigation/MainTabNavigator';
import { Container, Left, Right, Header, Title, Body, Content, Form, Item, Input, Label, Icon, Button, Picker, Item as FormItem} from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import PopupDialog from 'react-native-popup-dialog';

export default class AddScreen extends React.Component {
   static navigationOptions = {
      // header: null,
   };


   constructor(props) {
      super(props);
      this.state = {
         selectedStartDate: null,
         selectedEndDate: null,
         selectedGoal: '',
      };
      this.onDateChangeStart = this.onDateChangeStart.bind(this);
      this.onDateChangeEnd = this.onDateChangeEnd.bind(this);
   }


     onDateChangeStart(date) {
       this.setState({
         selectedStartDate: date,
       });
     }

     onDateChangeEnd(date) {
      this.setState({
         selectedEndDate: date,
      });
     }

     onGoalChange(value: string) {
        this.setState({
          selectedGoal: value
        });
     }

     onNewGoal() {
        console.log('WANTS TO MAKE A NEW EVENT.');
     }

   render() {
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? parseInt(selectedStartDate.getMonth()+1) + "/" + selectedStartDate.getDate() + "/" +selectedStartDate.getFullYear() : 'Select Start Date';

      const { selectedEndDate } = this.state;
      const endDate = selectedEndDate ? parseInt(selectedEndDate.getMonth()+1) + "/" + selectedEndDate.getDate() + "/" +selectedEndDate.getFullYear() : 'Select End Date';

      return (
         <ScrollView behavior="padding" style={styles.container}>
            <Container>
           <Header>
              <Body>
             <Title>Add a Task</Title>
           </Body>
           </Header>
              <Content>
                <Form>
                <Item fixedLabel>
                 <Label>Goal Category</Label>

                 <Picker
                   mode="dropdown"
                   placeholder="Select One"
                   selectedValue={this.state.selectedGoal}
                  onValueChange={this.onGoalChange.bind(this)}

                  renderHeader={backAction =>
                     <Header style={{ backgroundColor: "#f1c40f" }}>
                       <Left>
                         <Button transparent onPress={backAction}>
                           <Icon name="arrow-back" style={{ color: "#fff" }} />
                         </Button>
                       </Left>
                       <Body style={{ flex: 3 }}>
                         <Title style={{ color: "#fff" }}>Goal Category</Title>
                       </Body>
                       <Right>
                        <Button transparent onPress={() => {this.onNewGoal()}}>
                           <Text>New</Text>
                       </Button>
                       </Right>
                     </Header>}
                >
                   <Item label="SAT" value="key0" />
                   <Item label="ACT" value="key1" />
                   <Item label="College Application" value="key2" />
                   <Item label="Financial Aid" value="key3" />
                   <Item label="Personal Health" value="key4" />
                </Picker>
               </Item>



                  <Item floatingLabel>
                     <Label>Task Name</Label>
                    <Input />
                  </Item>

                  <Item floatingLabel>
                      <Icon active name='pin' />
                     <Label>Location</Label>
                    <Input />
                  </Item>

                  <Button full light onPress={() => {
                     this.popupDialogStart.show();
                  }}>
                     <Icon active name='calendar' />
                    <Text>{startDate}</Text>
                  </Button>

                  <PopupDialog
                     ref={(popupDialogStart) => { this.popupDialogStart = popupDialogStart; }}
                     height={500}
                   >
                     <View>
                        <CalendarPicker
                           onDateChange={this.onDateChangeStart}
                        />
                        <Button full warning
                        onPress={() => {this.popupDialogStart.dismiss();}} >
                         <Text>Save</Text>
                        </Button>

                     </View>
                   </PopupDialog>

                  <Button full light
                     onPress={() => {
                     this.popupDialogEnd.show();
                  }}
                     >
                     <Icon active name='calendar' />
                    <Text>{ endDate }</Text>
                  </Button>

                  <PopupDialog
                     ref={(popupDialogEnd) => { this.popupDialogEnd = popupDialogEnd; }}
                     height={500}
                   >
                     <View>
                        <CalendarPicker
                           onDateChange={this.onDateChangeEnd}
                        />

                        <Button full warning
                        onPress={() => {this.popupDialogEnd.dismiss();}} >
                         <Text>Save</Text>
                        </Button>

                     </View>
                   </PopupDialog>

                  <Item floatingLabel>
                     <Label>Notes</Label>
                    <Input />
                  </Item>

                  <Button full warning>
                   <Text>Save</Text>
                  </Button>

                </Form>
              </Content>
            </Container>

         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      //backgroundColor: '#f1c40f',
   },
});
