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
import SettingsList from 'react-native-settings-list';

export default class AddScreen extends React.Component {
   static navigationOptions = {
    header: null,
   };

   state = {
      fontLoaded: false,
   };

   constructor(props) {
      super(props);
      this.state = {
         startdatetime: null,
         enddatetime: null,
         selectedGoal: '',
         text: '',
         location: '',
         notes: '',

      };
      this.onDateChangeStart = this.onDateChangeStart.bind(this);
      this.onDateChangeEnd = this.onDateChangeEnd.bind(this);
   }

   async componentDidMount() {
    await Expo.Font.loadAsync({
       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
     });
     this.setState({fontLoaded:true});

   }

     onDateChangeStart(date) {
       this.setState({
         startdatetime: date,
       });
     }

     onDateChangeEnd(date) {
      this.setState({
         enddatetime: date,
      });
     }

     onGoalChange(value: string) {
        this.setState({
          selectedGoal: value
        });
     }

     onNewGoal() {
        console.log('WANTS TO MAKE A NEW GOAL.');
     }

   render() {
      const { startdatetime } = this.state;
      const startDate = startdatetime ? parseInt(startdatetime.getMonth()+1) + "/" + startdatetime.getDate() + "/" +startdatetime.getFullYear() : 'Select Start Date';

      const { enddatetime } = this.state;
      const endDate = enddatetime ? parseInt(enddatetime.getMonth()+1) + "/" + enddatetime.getDate() + "/" +enddatetime.getFullYear() : 'Select End Date';

      return (
         <ScrollView behavior="padding" style={styles.container}>
            <Container>

              <Content>
              <View style={styles.header}>
              <View style={styles.imagebox}>
              <TouchableOpacity onPress={()=>{this.popupDialogSettings.show()}}>
              <Image style={styles.stretch}
                    source={require('../assets/images/settings.png')} />
              </TouchableOpacity>
              </View>
             <PopupDialog
                ref={(popupDialogSettings) => { this.popupDialogSettings = popupDialogSettings; }}
                height={500} >
                <View>

        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>

           <SettingsList.Header headerStyle={{marginTop:15}}/>
           <SettingsList.Item
             title='Change Password'
             onPress={() => Alert.alert('Route To Notifications Page')}
           />
           <SettingsList.Item

             title='Public Profile'
             titleInfo='Off'
             titleInfoStyle={styles.titleInfoStyle}
             onPress={() => Alert.alert('Route to Blutooth Page')}
           />
           <SettingsList.Item
             title='Notifications'
             onPress={() => Alert.alert('Route To Control Center Page')}
           />
           <SettingsList.Header headerStyle={{marginTop:15}}/>
           <SettingsList.Item
             title='General'
             onPress={() => Alert.alert('Route To General Page')}
           />
           <SettingsList.Item
             title='Tutorial'
             onPress={() => Alert.alert('Route To General Page')}
           />
           <SettingsList.Item
             title='Help'
             onPress={() => Alert.alert('Route To General Page')}
           />
           <SettingsList.Item
             title='Privacy Policy'
             onPress={() => Alert.alert('Route To General Page')}
           />
        </SettingsList>


                   <Button full warning
                   onPress={() => {this.popupDialogSettings.dismiss();}} >
                    <Text>Save</Text>
                   </Button>

                </View>
             </PopupDialog>


              <View>
              <Text style={styles.instruction_text}>
              Add a Task  </Text>
              </View>
              </View>
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
                      {this.state.fontLoaded ? (<Icon active name='pin' />): null }
                     <Label>Location</Label>
                    <Input />
                  </Item>

                  <Button full light onPress={() => {
                     this.popupDialogStart.show();
                  }}>
                     {this.state.fontLoaded ? (<Icon active name='calendar' />) : null }
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
                     {this.state.fontLoaded ? (<Icon active name='calendar' />) : null}
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

                  <TouchableOpacity onPress={()=>{console.log('pressed SAVE')}} style={styles.buttonContainer}>
                           <Text style={styles.buttonText}> Save </Text>
                  </TouchableOpacity>

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
   title: {
      color: '#fff',
     paddingTop: 30,
     paddingBottom: 15,
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
     backgroundColor: '#f1c40f',
  },
  stylebox: {
     backgroundColor: '#34495e',
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
    fontSize: 25,
},
imagebox: {
  flex: 1
},

   instruction_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
},

stretch: {
width: 30,
height: 30,
position: 'absolute',
top: 0,
left: 10,
},
    header: {
     backgroundColor: '#f1c40f',
     paddingBottom: 15,
     paddingTop: 25,
     flexDirection: 'row',
},


});
