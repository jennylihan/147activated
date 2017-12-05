import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';

import Button from '../components/Button';
import NewsItem from '../components/NewsItem';


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
   //
   //  let fetchData() {
   //    setTimeout(180);
   //
   // }
    _onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});
        // fetchData().then(() => {
        //    this.setState({refreshing: false});
        // });
     }

    render() {
    return (
        <View style={styles.container}>


            <ScrollView style={styles.news_container}
            refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
            { this.renderNews() }
            </ScrollView>

        </View>
    );
    }

    renderNews() {
        return this.state.news_items.map((news, index) => {
            return <NewsItem key={index} index={index} news={news} />
        });
    }

    press () {
      //on press, lead to the task itself
    }
}



const styles = StyleSheet.create({
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
