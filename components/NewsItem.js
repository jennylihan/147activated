import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Button from './Button';


const NewsItem = ({ news, index }) => {
    let number = (index + 1).toString();

    return (
        <Button
		    key={index}
		    noDefaultStyles={true}
		    onPress={onPress.bind(this, news)}
		>
	    <View style={styles.news_item}>
	        <View style={styles.news_text}>
	            <View style={styles.number}>
	                <Text style={styles.title}>{number}.</Text>
	            </View>
	            <View style={styles.text_container}>
	                { getPretext(news) }
	                <Text style={styles.title}>{news.title}</Text>
	                <Text>{news.summary}</Text>
	            </View>
	        </View>
	        <View style={styles.news_photo}>
	            <Image source={news.image} style={styles.photo} />
	        </View>
	    </View>
	</Button>
	 );
}

function getPretext(news) {
    if(news.pretext){
        return (
            <Text style={styles.pretext}>{news.pretext}</Text>
        );
    }
}

function onPress(news) {
    alert(news.summary, 
    [{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')}]);
}

const styles = StyleSheet.create({
  news_item: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    news_text: {
        flex: 2,
        flexDirection: 'row',
        padding: 10,
    },
    pretext: {
    color: '#3F3F3F',
    fontSize: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
//        fontFamily: 'SpaceMono-Regular'
    },
    news_photo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        width: 80,
        height: 80
    }
});
export default NewsItem;
