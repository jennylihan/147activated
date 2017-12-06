import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image

} from 'react-native';

 import Icon from 'react-native-vector-icons/FontAwesome';
// import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import RootNavigation from '../navigation/RootNavigation';
import { Container, Header, Left, Right, Drawer } from 'native-base';
import SideBar from '../SideBar'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Login extends Component {

  // **ADDED THIS FOR DRAWER**
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  //**

     static navigationOptions = {
      title: 'My Map',
       header: null

   };
  render() {
    return (

      //ADDED THIS FOR DRAWER
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >

        <ScrollView style={styles.scroll}>

        <Header>
        <Button onPress={()=> this.openDrawer()} >
          <Text>test</Text>
        </Button>
        </Header>


                    <View style={styles.titleContainer}>
               <Text style={styles.formTitle}>Welcome to Activated</Text>
            </View>

              <View      style={{justifyContent: 'center',
    alignItems: 'center'}}>
              <Image style={{width: 200, height: 200, marginBottom: 50}}
          source={require('../assets/images/icon.png')}
        />
        </View>

            <TextInput
            style={styles.inputField}
            placeholder="Username or Email"
            autoCapitalize="none"

            editable={true}
            returnKeyType="next"
            />

            <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"

            editable={true}
            returnKeyType="next"
            />



          <TouchableOpacity onPress={this.pressLogin.bind(this)} style={styles.buttonContainer}>
               <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
       <View      style={{justifyContent: 'center',
    alignItems: 'center'}}>
        <Button
            label="Register"
            styles={{button: styles.alignRight, label: styles.label}}
            onPress={this.pressRegister.bind(this)} />
      </View>

        </ScrollView>

        </Drawer> // ADDED THIS LINE

    );
  }

  pressRegister () {

  }

  pressLogin () {
    const { navigate } = this.props.navigation;
    navigate('Main');
  }
}


const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#fff',
        padding: 30,
        flexDirection: 'column'

    },

    label: {
        color: '#FDBF2D',
        fontSize: 20
    },

    alignRight: {
        alignSelf: 'flex-end'
    },

    textInput: {
      height: 80,
      fontSize: 30,
      backgroundColor: '#FFF'
    },

    buttonWhiteText: {
      fontSize: 20,
      color: '#FFF',
    },

    buttonBlackText: {
      fontSize: 20,
      color: '#595856'
    },

    primaryButton: {
      backgroundColor: '#f1c40f'

    },

    footer: {
      marginTop: 100
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

      inputField: {
      padding: 7,
      fontSize: 25,
      marginBottom: 10,
      backgroundColor: 'rgba(253,191,45,0.5)',
   },

   titleContainer: {
      padding: 10,
      //flexGrow: 1,
   },
   formTitle: {
      color: '#FDBF2D',
      marginTop: 25,
      fontSize: 40,
      textAlign: 'left',
      opacity: 0.9,
   },

});
