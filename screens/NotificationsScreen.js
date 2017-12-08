import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  AlertIOS,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';
import NewsItem from '../components/NewsItem';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import PopupDialog from 'react-native-popup-dialog';
import SettingsList from 'react-native-settings-list';


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
      Notifications  </Text>
      </View>
      </View>
      <Content>


        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/pic1.png')} />
            </Left>
            <Body>
              <Text style={styles.textA}>Free Practice SAT Session</Text>
              <Text style={styles.smaller_text}>SAT </Text>
              <Text style={styles.small_text}>Event Date: 12/3/17</Text>
              <Text style={styles.small_text}>Shared by Kira Pan</Text>
            </Body>
            <Right>
              <Button onPress={this.onPress.bind(this,"Kira" )}>
                    <Text style={{color: 'steelblue'}}>{'Add'}</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/pic3.png')} />
            </Left>
            <Body>
              <Text style={styles.textA}>Internship Workshop</Text>
              <Text style={styles.smaller_text}>Professional Work </Text>
              <Text style={styles.small_text}>Event Date: 11/26/17</Text>
              <Text style={styles.small_text}>Shared by Tom Loreno</Text>
            </Body>
            <Right>
            <Button onPress={this.onPress.bind(this, "Mr. Doan")}>
                  <Text style={{color: 'steelblue'}}>{'Add'}</Text>
            </Button>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/pic2.png')} />
            </Left>
            <Body>
              <Text style={styles.textA}>Talk to Mrs. Bailey about SIMR Application</Text>
              <Text style={styles.smaller_text}>Summer Opportunities</Text>
              <Text style={styles.small_text}>Event Date: 10/17/17</Text>
              <Text style={styles.small_text}>Shared by Mrs. Bailey</Text>
            </Body>
            <Right>
            <Button onPress={this.onPress.bind(this, "Mrs. Bailey")}>
                  <Text style={{color: 'steelblue'}}>{'Add'}</Text>
            </Button>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:10}} source={require('../assets/images/pic4.png')} />
            </Left>
            <Body>
              <Text style={styles.textA}>Study session for SAT</Text>
              <Text style={styles.smaller_text}>SAT</Text>
              <Text style={styles.small_text}>Event Date: 10/17/17</Text>
              <Text style={styles.small_text}>Shared by Minh Le</Text>
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
  textA: {
     fontSize: 20,
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
    smaller_text: {

      fontSize: 15,
      color: '#c5c5c5',
      fontWeight: 'bold',
      padding: 1.5,
    },
    small_text: {
       fontSize: 15,
       textAlign: 'left',
       color: '#5F5F5F',
    },
});
