/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native'
import PeopleIndexScreen from './app/screens/PeopleIndexScreen';

export default class App extends Component<{}> {
  _renderScene(route, navigator) {
    var globalNavigatorProps = {
      navigator: navigator
    }

    switch(route.ident) {
      case "PeopleIndex":
        return (<PeopleIndexScreen {...globalNavigatorProps} />)
      default:
        return (<PeopleIndexScreen {...globalNavigatorProps} />)
    }
  }
  render() {
    return (
      <NavigatorIOS
        initialRoute={{component: PeopleIndexScreen, title: 'My Initial State', passProps: {index: 1} }}
        ref="appNavigator"
        style={{flex: 1}}
        renderScene={this._renderScene} />
    )
  }
}

const styles = {
  navigatorStyle: {

  }
};
