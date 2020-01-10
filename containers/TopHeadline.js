import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, CardItem } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { RFValue } from "react-native-responsive-fontsize";
import { URL } from '../components/basic/url';
import { API_KEY } from '../components/basic/apikey';
import NavigationService from '../components/navigation/NavigationService';
import Loading from '../components/basic/Loading';
import axios from 'axios';

export default class TopHeadline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: '',
            headlines: []
        }
    }

    componentDidMount(){
        this.fetchTopHeadlines();
    }

    fetchTopHeadlines = () => {
        this.setState({ isLoading: true });
        axios.get(URL + "top-headlines?sources=techcrunch&apiKey=" + API_KEY)
            .then(result => this.setState({
                headlines: result.data.articles,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }


    _renderItem = ({ item }) => {
        return (
            <Card>
                <TouchableOpacity onPress={() => NavigationService.navigate('NewsDetail', { image: item.urlToImage, title: item.title, content: item.content })}>
                    <CardItem cardBody>
                        <ImageBackground source={{ uri: item.urlToImage }} style={styles.imageBackground} >
                            <View style={styles.viewContainer}>
                                <View style={styles.itemContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }

    render() {

        const { isLoading, headlines } = this.state;

        if (isLoading) {
            return (<Loading />);
        }

        return (
            <View style={styles.carouselView}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    onPress={() => { this._carousel.snapToNext(); }}
                    data={headlines}
                    renderItem={this._renderItem}
                    loop={true}
                    autoplay
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                    autoplayInterval={2000}
                    sliderWidth={400}
                    itemWidth={350}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    carouselView: {
        flex: 0.4,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBackground: {
        height: 200,
        width: 350,
        flex: 1
    },
    viewContainer: {
        height: 200,
        width: null,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    itemContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        paddingLeft: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 200,
        width: null
    },
    title: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontWeight: 'bold',
        fontSize: RFValue(15),
        backgroundColor: 'transparent',
        color: '#fff'
    }
});
