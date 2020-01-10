import { Easing, Animated, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../pages/Home';
import NewsDetail from '../../pages/NewsDetail';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [{ translateX }] }
        },
    }
}

const AppStack = createStackNavigator(
    {
        Home: { screen: Home, navigationOptions: () => ({ title: "Techcrunch News" }) },
        NewsDetail: { screen: NewsDetail, navigationOptions: ({ navigation }) => ({ title: navigation.getParam('title') }) }
    },
    {
        defaultNavigationOptions: {
            title: "Techcrunch",
            headerStyle: {
                backgroundColor: '#008C00',
                elevation: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
                width: (Dimensions.get('window').width) / 1.5
            }
        },
        transitionConfig
    });

export default AppStack;
