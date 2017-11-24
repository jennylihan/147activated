import React from 'react';
import {
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   TextInput,
   KeyboardAvoidingView,
   AsyncStorage,
   Picker,
} from 'react-native';

import PropTypes from 'prop-types';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class AddScreen extends React.Component {
   static navigationOptions = {
      header: null,
   };

   constructor(props) {
      super(props);
      this.state = {
         text:'',
         category: 'SAT'
      };
   }

   onValueChange(key, value) {
      console.log(key+':'+value)
      this.setState({category: value});
   }
   render() {
      return (
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
         </KeyboardAvoidingView>
      );
   }

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f1c40f',
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
