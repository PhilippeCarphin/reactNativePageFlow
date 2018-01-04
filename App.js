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
  ListView,
  TouchableOpacity
} from 'react-native';
import ViewContainer from './app/components/ViewContainer';
import StatusBarBackground from './app/components/StatusBarBackground';
import _ from 'lodash'
// DId this after npm installing
// react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const people = [
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "ginette", lastName: 'Renaud', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "PHIL", lastName: 'Carphin', roomNumber: 1 },
  {firstName: "Thom", lastName: 'Dion', roomNumber: 1 },
  {firstName: "Paul", lastName: 'Carphin', roomNumber: 1 },
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
          style={styles.listViewStyle}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person)}} />
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity onPress={(event) => console.log("TouchableOpacity onPress()")}>
        <ChevronListItem>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.firstName}>{_.capitalize(person.firstName)} </Text>
            <Text style={styles.lastName}>{_.capitalize(person.lastName)}</Text>
          </View>
        </ChevronListItem>
      </TouchableOpacity>
    )
  }
}

ChevronListItem = ({children}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    {children}
    <Icon name='chevron-right' size={30} style={styles.personMoreIcon}/>
  </View>
)

const styles = StyleSheet.create({
  listViewStyle:{

  },
  personRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  personMoreIcon: {
    color: "green",
    height: 30,
    width: 30
  },
  perstName: {
    fontSize: 18
  },
  lastName: {
    fontSize: 21
  }
});
