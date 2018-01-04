/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import ViewContainer from './app/components/ViewContainer';
import StatusBarBackground from './app/components/StatusBarBackground';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const people = [
  {firstName: "Phil", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Ginette", lastName: 'Renaud', roomNumber: 1 }
]

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: "blue"}}/>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person)}} />
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <View style={styles.personRow}>
        <Text style={styles.firstName}>{person.firstName} </Text>
        <Text style={styles.lastName}>{person.lastName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  personRow: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  firstName: {
    fontSize: 18
  },
  lastName: {
    fontSize: 21
  }
});
