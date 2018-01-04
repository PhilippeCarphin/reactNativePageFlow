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
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground'
import PersonShowScreen from './PersonShowScreen'
import _ from 'lodash'
// DId this after npm installing
// react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'

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

export default class PeopleIndexScreen extends Component<{}> {
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
        <ListView
          style={styles.listViewStyle}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person)}} />
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity onPress={(event) => this.navigateToPerson(person)}>
        <ChevronListItem>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.firstName}>{_.capitalize(person.firstName)} </Text>
            <Text style={styles.lastName}>{_.capitalize(person.lastName)}</Text>
          </View>
        </ChevronListItem>
      </TouchableOpacity>
    )
  }

  navigateToPerson(person) {
    const nextScreen = {
      component: PersonShowScreen,
      title:"Person Show",
      passProps:{person:person}
    }
    // Automatiquement, quand le NavigatorIOS a instancié notre PeopleIndexScreen,
    // il a mis une référence à lui même dans les props de celui-ci.
    this.props.navigator.push(nextScreen)
  }
}

ChevronListItem = ({children}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    {children}
    <Icon name='chevron-right' size={30} style={styles.personMoreIcon}/>
  </View>
)

const styles = {
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
}
