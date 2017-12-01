import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
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
            news_items: [
                {
                    pretext: 'Shared by Kira Pan.',
                    title: 'Free Practice SAT Session',
                    summary: 'Goal: SAT\nDate: 10/3/17',
                    image: require('../assets/images/icons8-exam-50.png')
                },
                {
                    pretext: 'Shared by Mr. Doan.',
                    title: 'Internship Workshop',
                    summary: 'Goal: Professional Work\nDate: 10/26/17',
                    image: require('../assets/images/icons8-briefcase-48.png')
                },
                {
                    pretext: 'Shared by Silvia Villagomez.',
                    title: 'College Fair',
                    summary: 'Goal: Research\nDate: 10/16/17',
                    image: require('../assets/images/icons8-study-50.png')
                },

            ]
        };
    }

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.instruction_text}>SHARED TASKS FROM OTHERS: </Text>
            </View>

            <ScrollView style={styles.news_container}>
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
