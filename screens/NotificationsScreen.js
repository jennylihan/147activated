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
import DatePicker from 'react-native-datepicker'

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

var STORAGE_KEY = 'KEY';

export default class AddScreen extends React.Component {
   static navigationOptions = {
      header: null,
   };

   constructor(props) {
      super(props);

      var today = new Date();
      date = today.getFullYear() + "-" + parseInt(today.getMonth()+1) + "-" + today.getDate();
      this.state = {
         text:'',
         category: 'SAT',
         startdatetime: date,
         enddatetime: date,

      };
   }

   async onValueChange(key, value) {
      console.log(key+':'+value)
      this.setState({category: value});
      try {
        await AsyncStorage.setItem(key, value, () =>{
          AsyncStorage.getItem("category", (err, result) => {
              console.log(result);
          })    
        });
        console.log("stored");
      } catch (error) {
        console.log("error");
      }  
   }

   render() {
      var color = this.state.category;
      return (

         <ScrollView behavior="padding" style={styles.container}>
            <View style={styles.titleContainer}>
               <Text style={styles.formTitle}>Make a task</Text>
            </View>
            <View style={styles.formContainer}>

            <Picker
               //selectedValue={this.state.category}
               selectedValue={color}
               onValueChange={
                this.onValueChange.bind(this, 'category')}>
               <item label="SAT" value="sat" />
               <item label="ACT" value="act" />
               <item label="Financial Aid" value="financial aid" />
            </Picker>

            <Text>
            {'Selected: ' + color}
            </Text>

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
                style={{width: 170}}
                date={this.state.datetime}
                mode="datetime"
                format="YYYY-MM-DD HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(datetime) => {this.setState({startdatetime: datetime});}}
                />
             </View>
             <View style={styles.endPicker}>
               <Text style={styles.dateInstructions}>End</Text>
                <DatePicker
                 style={{width: 170}}
                 date={this.state.datetime}
                 mode="datetime"
                 format="YYYY-MM-DD HH:mm"
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
            onChangeText={(text) => this.setState({text})}
            editable={true}
            returnKeyType="next"
            />

            <TextInput
            style={styles.inputField}
            placeholder="Notes"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({text})}
            editable={true}
            returnKeyType="next"
            />


            <TouchableOpacity onPress={this.makeTask} style={styles.buttonContainer}>
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
