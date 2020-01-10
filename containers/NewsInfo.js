import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { H2, Text, Item } from 'native-base';

const NewsInfo = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.6 }}>
                <Image source={{ uri: props.image }} style={styles.imageBackground} />
            </View>
            <View style={{ flex: 1 }}>
                <H2 style={styles.newsText}>{props.title}</H2>
                <Text style={styles.newsText}>{props.content}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    imageBackground: {
        height: (Dimensions.get('window').width) / 2,
        width: null,
        flex: 1
    },
    newsText: {
        padding: 10,
        textAlign: 'justify',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NewsInfo;
