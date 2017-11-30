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
    alert(news.title);
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
        borderBottomColor: '#E4E4E4'
    },
    news_text: {
        flex: 2,
        flexDirection: 'row',
        padding: 10
    },
});
export default NewsItem;
