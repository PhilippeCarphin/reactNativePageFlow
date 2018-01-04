'use strict'
import React, { Component } from 'react'
import { View } from 'react-native'

class StatusBarBackground extends Component {

  render() {
    return (
      <View style={[ styles.default, this.props.style || {} ]}>
      </View>
    );
  };
};

const styles = {
  default : {
    height: 20,
    backgroundColor: "green"
  }
}

export default StatusBarBackground;
