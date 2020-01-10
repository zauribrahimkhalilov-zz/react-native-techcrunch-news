import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'native-base';
import NavigationService from './components/navigation/NavigationService';
import AppStack from './components/navigation/AppStack'
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppStack);

export default class App extends Component {

  render() {

    return (
      <Container>
        <StatusBar backgroundColor="#008C00" />
        <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Container>
    );
  }

}
