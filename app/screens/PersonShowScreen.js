import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import PeopleIndexScreen from './PeopleIndexScreen'

export default class PersonShowScreen extends Component {
  render () {
    return (
      <View style={{marginTop: 80}}>
        <TouchableOpacity onPress={(event) => this.firstNameButton()}>
          <Text style={styles.firstName}>{this.props.person.firstName}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(event) => this.lastNameButton()}>
          <Text style={styles.lastName}>{this.props.person.lastName}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(event) => this.notBack()}>
          <Text>"Press here to go to Person Index screen but note that this does't go back"</Text>
        </TouchableOpacity>
      </View>
    )
  }

  notBack() {
    this.props.navigator.push({
      component: PeopleIndexScreen,
      title: "People Index"
    })
  }

  lastNameButton() {
    this.props.navigator.push({
      component: View,
      title: "Blue Screen",
      passProps: {
        style: {
          backgroundColor: "blue",
          flex:1
        }
      }
    })
  }

  firstNameButton() {
    this.props.navigator.push({
      component: View,
      title: "Green Screen",
      passProps: {
        style: {
          backgroundColor: "green",
          flex:1
        }
      }
    })
  }
}

const styles = {
  firstName: {
    fontSize: 30
  },
  lastName: {
    fontSize: 55
  }
}
