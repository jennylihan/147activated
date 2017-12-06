import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';

import Button from '../components/Button';
import NewsItem from '../components/NewsItem';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';


export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
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
                    image: require('../assets/images/icons8-exam-50.png')
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
      <Content>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/icons8-exam-50.png')} />
            </Left>
            <Body>
              <Text>Free Practice SAT Session</Text>
              <Text note>Goal: SAT </Text>
              <Text note>Event Date: 12/3/17</Text>
              <Text note>Shared by: Kira Pan</Text>
            </Body>
            <Right>
              <Text style={styles.view}>View</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/icons8-briefcase-48.png')} />
            </Left>
            <Body>
              <Text>Internship Workshop</Text>
              <Text note>Goal: Professional Work </Text>
              <Text note>Event Date: 11/26/17</Text>
              <Text note>Shared by: Mr. Doan</Text>
            </Body>
            <Right>
              <Text style={styles.view}>View</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/icons8-study-50.png')} />
            </Left>
            <Body>
              <Text>College Fair</Text>
              <Text note>Goal: Research </Text>
              <Text note>Event Date: 10/16/17</Text>
              <Text note>Shared by: Silvia Villagomez</Text>
            </Body>
            <Right>
              <Text style={styles.view}>View</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
      </Container>
    );
    }

    press () {
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
        flexDirection: 'row',
        backgroundColor: '#f1c40f',
        padding: 20,
        justifyContent: 'center',
        borderBottomColor: '#f1c40f',
        borderBottomWidth: 1
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
