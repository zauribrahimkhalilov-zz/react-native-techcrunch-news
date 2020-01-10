import React from 'react';
import { View } from 'react-native';
import TopHeadline from '../containers/TopHeadline';
import AllNews from '../containers/AllNews';

const Home = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <TopHeadline navigation={props.navigation} />
            <AllNews navigation={props.navigation} />
        </View>
    );

}

export default Home;
