import React from 'react';
import NewsInfo from '../containers/NewsInfo';

const NewsDetail = (props) => {

    return (
        <NewsInfo
            navigation={props.navigation}
            image={props.navigation.getParam('image')}
            title={props.navigation.getParam('title')}
            author={props.navigation.getParam('author')}
            description={props.navigation.getParam('description')}
            content={props.navigation.getParam('content')}
        />
    );

}

export default NewsDetail;
