import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';

const Loading = () => {

    return (
        <View style={styles.container}>
            <Spinner color='#008C00' />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
});
export default Loading;