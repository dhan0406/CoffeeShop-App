import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Home extends React.Component {

  onStart() {
    this.props.newSearch()
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button 
        title="Start Search"
        onPress={this.onStart.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,justifyContent:"center",backgroundColor:"#fff", alignItems:"center"
  },
  text: {
    fontSize: 20,
  }
});