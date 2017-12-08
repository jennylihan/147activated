import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  AlertIOS,
  RefreshControl,
} from 'react-native';

import Button from '../components/Button';
import NewsItem from '../components/NewsItem';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';


export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Notifications',
    header: null,
  };

    constructor(props) {
        super(props);
        this.state = {
           refreshing: false,
            news_items: [
                {
                    pretext: 'Shared by Kira Pan',
                    title: 'Free Practice SAT Session',
                    summary: 'Goal: SAT\nEvent Date: 12/3/17',
                    image: require('../assets/images/icons8-study-50.png')
                },
                {
                    pretext: 'Shared by Mr. Doan',
                    title: 'Internship Workshop',
                    summary: 'Goal: Professional Work\nEvent Date: 11/26/17',
                    image: require('../assets/images/icons8-briefcase-48.png')
                },
                {
                    pretext: 'Shared by Silvia Villagomez',
                    title: 'College Fair',
                    summary: 'Goal: Research\nEvent Date: 10/16/17',
                    image: require('../assets/images/icons8-study-50.png')
                },

            ]
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});

     }

    render() {
    return (

      <Container>
      <View style={styles.header}>
      <Text style={styles.instruction_text}>Notifications</Text>
      </View>
      <Content>
      <Text style={styles.header}>Notifications</Text>

        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/hex_sat.png')} />
            </Left>
            <Body>
              <Text>Free Practice SAT Session</Text>
              <Text note>Goal: SAT </Text>
              <Text note>Event Date: 12/3/17</Text>
              <Text note>Shared by: Kira Pan</Text>
            </Body>
            <Right>
              <Button onPress={this.onPress.bind(this,"Kira" )}>
                    <Text style={{color: 'steelblue'}}>{'Add'}</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/hex_professional.png')} />
            </Left>
            <Body>
              <Text>Internship Workshop</Text>
              <Text note>Goal: Professional Work </Text>
              <Text note>Event Date: 11/26/17</Text>
              <Text note>Shared by: Tom Loreno</Text>
            </Body>
            <Right>
            <Button onPress={this.onPress.bind(this, "Mr. Doan")}>
                  <Text style={{color: 'steelblue'}}>{'Add'}</Text>
            </Button>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/hex_summeropp.png')} />
            </Left>
            <Body>
              <Text>Talk to Mrs. Bailey about SIMR Application</Text>
              <Text note>Goal: Summer Opportunities</Text>
              <Text note>Event Date: 10/17/17</Text>
              <Text note>Shared by: Mrs. Bailey</Text>
            </Body>
            <Right>
            <Button onPress={this.onPress.bind(this, "Mrs. Bailey")}>
                  <Text style={{color: 'steelblue'}}>{'Add'}</Text>
            </Button>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/hex_sat.png')} />
            </Left>
            <Body>
              <Text>Study sesh for SAT</Text>
              <Text note>Goal: SAT</Text>
              <Text note>Event Date: 10/17/17</Text>
              <Text note>Shared by: Minh Le</Text>
            </Body>
            <Right>
            <Button onPress={this.onPress.bind(this, "Minh")}>
                  <Text style={{color: 'steelblue'}}>{'Add'}</Text>
            </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
      </Container>
    );
    }

    onPress (name) {
      AlertIOS.alert(
          'Add '+ name + '\'s task?',
            'This task shared by ' + name + ' will be added to your own calendar.',
     [
       {text: 'Cancel', onPress: () => console.log('Cancelled'), style: 'cancel'},
       {text: 'Add', onPress: () => AlertIOS.alert('Added Successfully!', 'Better get to work. :)', [{text:'Ok'}])},
     ],
    );
    }
}



const styles = StyleSheet.create({
  view: {
      color: 'steelblue',
  },
  // thumbnail: {
  //   width:10,
  //   height:10
  // },
  container: {
        flex: 1
    },
    header: {
        // flexDirection: 'row',
        // backgroundColor: '#f1c40f',
        // padding: 20,
        // justifyContent: 'center',
        // borderBottomColor: '#f1c40f',
        // borderBottomWidth: 1
        // color: '#fff',
        paddingTop: 30,
        paddingBottom: 15,
        // fontSize: 20,
        // fontWeight: 'bold',
        // textAlign: 'center',
        backgroundColor: '#f1c40f',
    },
    header_button: {
        flex: 1,
    },
    whitespace: {
        flex: 1
    },
    back_button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    back_button_label: {
        color: '#397CA9',
        fontSize: 20,
    },
    instruction: {
        alignSelf: 'center',
        marginTop: 5
    },
    instruction_text: {
        color: '#fff'
    },
    header_text: {
        flex: 1,
        alignSelf: 'center'
    },
    header_text_label: {
        fontSize: 20,
        textAlign: 'center'
    },
    news_container: {
        flex: 1,
        flexDirection: 'column'
    },
});
