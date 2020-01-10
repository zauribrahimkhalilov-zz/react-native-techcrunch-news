import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import NavigationService from '../components/navigation/NavigationService.js';
import { URL } from '../components/basic/url';
import { API_KEY } from '../components/basic/apikey';
import Loading from '../components/basic/Loading';
import axios from 'axios';

export default class NewsGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: '',
            news: []
        }
    }

    componentDidMount() {
        this.fetchAllNews();
    }

    fetchAllNews = () => {
        this.setState({ isLoading: true });
        axios.get(URL + "everything?sources=techcrunch&apiKey=" + API_KEY)
            .then(result => this.setState({
                news: result.data.articles,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => NavigationService.navigate('NewsDetail', { image: item.urlToImage, title: item.title, content: item.content })}>
                <Card style={styles.card}>
                    <CardItem cardBody>
                        <Image source={{ uri: item.urlToImage }} style={styles.itemImage} />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={styles.itemContainer}>
                        <Text>{item.publishedAt.slice(0, 10)}</Text>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }

    render() {

        const { isLoading, news } = this.state;

        if (isLoading) {
            return (<Loading />);
        }

        return (
            <View style={styles.view}>
                <FlatGrid
                    itemDimension={130}
                    items={news}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 10
    },
    card: {
        height: 255
    },
    itemContainer: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    titleStyle: {
        fontWeight: 'bold'
    },
    itemImage: {
        flex: 1,
        width: null,
        height: 120,
    }
});
