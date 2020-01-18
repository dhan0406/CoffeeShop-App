import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  onStart() {
    this.props.newSearch()
  }
  render() {
    return(
      <View>
        <Text>Welcome</Text>
        <Button 
        title="Start Search"
        onPress={this.onStart.bind(this)} />
      </View>
    )
  }

}