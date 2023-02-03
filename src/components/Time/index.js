import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Time extends Component {

  componentDidMount(){

    setInterval(() => (

      this.setState(
        { curTime : new Date().toLocaleString()}

      )
    ), 1000);
  }


  state = {curTime:new Date().toLocaleString()};

  render() {
    return (
      <View>
        <Text>{'\n'}{'\n'}{'\n'}The time is: {this.state.curTime}</Text>

      </View>
    );
  }
}
