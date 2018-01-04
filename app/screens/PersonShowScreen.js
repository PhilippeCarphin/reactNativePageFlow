import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

export default class PersonShowScreen extends Component {
  render () {
    return (
      <View style={{marginTop: 80}}>
        <Text style={styles.firstName}>{this.props.person.firstName}</Text>
        <Text style={styles.lastName}>{this.props.person.lastName}</Text>
      </View>
    )
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
