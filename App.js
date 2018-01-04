/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigatorIOS, View } from 'react-native'
import PeopleIndexScreen from './app/screens/PeopleIndexScreen';
import PersonShowScreen from './app/screens/PersonShowScreen';
import StatusBarBackground from './app/components/StatusBarBackground';

export default class App extends Component<{}> {
  _renderScene(route, navigator) {
    var globalNavigatorProps = {
      navigator: navigator
    }

    switch(route.title) {
      case "PeopleIndex":
        return (<PeopleIndexScreen {...globalNavigatorProps} />)
      case "PeopleShow":
        return (<PersonShowScreen {...globalNavigatorProps} />)
      default:
        return (<PeopleIndexScreen {...globalNavigatorProps} />)
    }
  }

  render() {
    return (
        <NavigatorIOS
          initialRoute={{component: PeopleIndexScreen, title: 'PeopleIndex', passProps: {person: {firstName: 'Phil', lastName: 'Carphin'}} }}
          ref="appNavigator"
          style={{flex: 1}}
          renderScene={this._renderScene} />
    )
  }
}
