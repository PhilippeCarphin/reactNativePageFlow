/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigator } from 'react-native'
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
    return this._renderScene({ident: "PeopleIndex"}, {})
  }
}

const styles = {
  navigatorStyle: {

  }
};
