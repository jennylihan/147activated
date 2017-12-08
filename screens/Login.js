import React, { Component } from 'react';
import { Font } from 'expo';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
import { Drawer, Container, Left, Right, Header, Title, Body, Content, Form, Item, Input, Label, Icon, Button, Picker, Item as FormItem, H1} from 'native-base';
import SideBar from '../SideBar';

import RootNavigation from '../navigation/RootNavigation';

export default class Login extends Component {

  // **ADDED THIS FOR DRAWER**
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  //**

     state = {
       fontLoaded: false,
       title: "let's get activated",
     };

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

        <Container>
             <Content>
               <View style={styles.titleContainer}>
               <Text style={styles.formTitle}>{this.state.title}</Text>
                 </View>

                 <View
                         style={{justifyContent: 'center',
                         alignItems: 'center'}}>
                        <Image style={{width: 200, height: 200, marginBottom: 50}}
                        source={require('../assets/images/icon.png')}
                        />
                  </View>
               <Form>
                 <Item>
                   <Input placeholder="Username" />
                 </Item>
                 <Item last>
                   <Input
                   secureTextEntry={true}
                   placeholder="Password" />
                 </Item>
               </Form>


              <TouchableOpacity onPress={this.pressLogin.bind(this)} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}> Login </Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>{console.log('register clicked')}} style={styles.buttonContainer}>
                         <Text style={styles.buttonText}> Register </Text>
                </TouchableOpacity>
             </Content>
           </Container>
        </Drawer>
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
      marginTop: 30,
      fontSize: 40,
      textAlign: 'center',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      opacity: 0.9,
   },

});
