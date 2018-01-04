/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigatorIOS, View } from 'react-native'
import PeopleIndexScreen from './app/screens/PeopleIndexScreen';
import StatusBarBackground from './app/components/StatusBarBackground';

export default class App extends Component<{}> {

  render() {
    return (
        <NavigatorIOS
          initialRoute={{
            component: PeopleIndexScreen,
            title: 'People Index'
          }}
          ref="appNavigator"
          style={{flex: 1}}
        />
    )
  }
}
