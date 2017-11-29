import DialogManager, { ScaleAnimation, DialogContent } from 'react-native-dialog-component';
import { DialogComponent, DialogTitle } from 'react-native-dialog-component';
import React from 'react';
import {
   Alert, 
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
import Button from '../components/Button';


export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };
    constructor() {
      super();

   }

  //  dialogAnimationPickerChange(value) {
  //   let dialogAnimation;

  //   switch (value) {
  //     case 'default':
  //       dialogAnimation = new FadeAnimation({ animationDuration: 150 });
  //       break;
  //     case 'scale':
  //       dialogAnimation = new ScaleAnimation();
  //       break;
  //     case 'slide':
  //       dialogAnimation = new SlideAnimation({ slideFrom: 'top' });
  //       break;
  //     default:
  //       dialogAnimation = new FadeAnimation({ animationDuration: 150 });
  //       break;
  //   }

  //   this.setState({
  //     dialogAnimation,
  //     selectedDialogAnimation: value,
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
      <Button 
          label="Share"
          styles={{button: styles.alignRight, label: styles.label}}
          onPress={() => {this.dialogComponent.show();}} />

      <DialogComponent
        dialogTitle={<DialogTitle title="Dialog Title" />}
        ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
      >
        <DialogContent>
          <View>
            <Text>Hello</Text>
          </View>  
         </DialogContent>
      </DialogComponent>
    </View>
    );
  }
}




const styles = StyleSheet.create({
  picker: {

  },
   container: {
      flex: 1,
      backgroundColor: '#E1D7D8',
   },

   actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
   },




   titleContainer: {
      padding: 10,
      //flexGrow: 1,
   },

   backgroundImage: {
      flex: 1,
      width: null, height: null,
      //resizeMode: 'stretch', // or 'stretch'
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