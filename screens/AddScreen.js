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
   Picker,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import MainTabNavigator from '../navigation/MainTabNavigator';


export default class AddScreen extends React.Component {
   static navigationOptions = {
      // header: null,
   };

   constructor(props) {
      super(props);

      var today = new Date();
      date =  parseInt(today.getMonth()+1) + "-" + today.getDate() + "-" +today.getFullYear();
      this.state = {
         text:'',
         category: 'SAT',
         startdatetime: date,
         enddatetime: date,
         icon: 'study-icon',
         notes: ''

      };
   }

   onValueChange(key, value) {
      console.log(key+':'+value)
      this.setState({category: value});
   }
   render() {
      return (

         <ScrollView behavior="padding" style={styles.container}>
            <View style={styles.titleContainer}>
               <Text style={styles.formTitle}>Make a task</Text>
            </View>
            <View style={styles.formContainer}>

            <Picker
               selectedValue={this.state.category}
               onValueChange={this.onValueChange.bind(this, 'category')}

            >
               <item label="SAT" value="sat" />
               <item label="ACT" value="act" />
               <item label="Financial Aid" value="financial aid" />
            </Picker>


            <TextInput
            style={styles.inputField}
            placeholder="Task name"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({text})}
            editable={true}
            returnKeyType="next"
            />


            <TextInput
            style={styles.inputField}
            placeholder="Location"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({text})}
            editable={true}
            returnKeyType="next"
            />

            <Text style={styles.instructions}>Date and Time</Text>

            <View style={{flexDirection: 'row', flex: 1, padding: 8}}>
             <View style={styles.startPicker}>
               <Text style={styles.dateInstructions}>Start</Text>
                <DatePicker
                style={{width: 170, backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#f1c40f'}}
                date={this.state.datetime}
                mode="datetime"
                is24Hour={false}
                format="MM-DD-YYYY HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(datetime) => {this.setState({startdatetime: datetime});}}
                />
             </View>
             <View style={styles.endPicker}>
               <Text style={styles.dateInstructions}>End</Text>
                <DatePicker
                 style={{width: 170, backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#f1c40f'}}
                 date={this.state.datetime}
                 mode="datetime"
                is24Hour={false}
                 format="MM-DD-YYYY HH:mm"
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 showIcon={false}
                 onDateChange={(datetime) => {this.setState({enddatetime: datetime});}}
                />
             </View>
            </View>


            <TextInput
            style={styles.inputField}
            placeholder="Notes"
            autoCapitalize="none"
            onChangeText={(notes) => this.setState({notes})}
            editable={true}
            returnKeyType="next"
            />



            <TouchableOpacity onPress={async () =>
               {

            try {
               const value =  await AsyncStorage.getItem('@activated:tasks').then(function(tasks) {
               return  JSON.parse(tasks);
               });

               if (value !== null){

                  value.push(this.state)
                  console.log(JSON.stringify(this.state))

                  await AsyncStorage.setItem('@activated:tasks2', JSON.stringify(value));
                  console.log(JSON.stringify(value));
                  console.log("Here")
               }
            } catch (e) {
               // Error retrieving data
               console.log("Failed to get data from storage")

               console.log("Error", e.stack);
               console.log("Error", e.name);
               console.log("Error", e.message);
            }



                  this.props.navigation.navigate("MyMap", { taskInfo:
               this.state})}
            } style={styles.buttonContainer}>
               <Text style={styles.buttonText}> SAVE </Text>
            </TouchableOpacity>
            </View>
         </ScrollView>
      );
   }

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f1c40f',
   },
   dateInstructions: {
      fontSize: 18,
      textAlign: 'center',
   },
   instructions: {
      color: '#FFF',
      fontSize: 25,
      textAlign: 'left',
      opacity: 0.9,
   },
   titleContainer: {
      padding: 10,
      //flexGrow: 1,
   },
   formTitle: {
      color: '#FFF',
      marginTop: 25,
      fontSize: 40,
      textAlign: 'left',
      opacity: 0.9,
   },
   inputField: {
      padding: 7,
      fontSize: 25,
      marginBottom: 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
   },

   formContainer: {
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
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
   },

});


AppRegistry.registerComponent('datepicker', () => datepicker);
