import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import RootNavigation from '../navigation/RootNavigation';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>
        	<Container>
    		<Button 
        		label="Register"
        		styles={{button: styles.alignRight, label: styles.label}}
            onPress={this.pressRegister.bind(this)} />
			</Container>

			<Container>
    		<Label text="Username or Email" />
    		<TextInput
        		style={styles.textInput}
    		/>
			</Container>
			<Container>
    			<Label text="Password" />
    			<TextInput
        			secureTextEntry={true}
        			style={styles.textInput}
    			/>
			</Container>

      <View style={styles.footer}>
      <Container>
        <Button 
            label="Sign In"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={this.pressLogin.bind(this)} />
      </Container>
      </View>
        </ScrollView>
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
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },

    label: {
        color: '#0d8898',
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
      backgroundColor: '#34A853'
    },

    footer: {
      marginTop: 100
    }
});