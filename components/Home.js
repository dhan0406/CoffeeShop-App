import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import * as Font from 'expo-font';


export default class Home extends React.Component {
  state = {
    fontLoaded: false,
  }
  componentDidMount() {
    Font.loadAsync({
      'SpicyRice-Regular': require('../assets/fonts/SpicyRice-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  onStart() {
    this.props.newSearch()
  }
  render() {
    return(
      
      <ImageBackground
        imageStyle={{opacity:0.5, }}
        style={{flex:1,justifyContent:"center", alignItems:"center", }}
      
        source={{uri: 'https://live.staticflickr.com/65535/49386732066_b9d1a4c4ed_b.jpg' }}
>
      {
        this.state.fontLoaded? (
          <Text style={ 
            {fontFamily: 'SpicyRice-Regular',
            fontSize: 56,
            alignItems: 'center',
            justifyContent:"center"}}>
            Coffee Mate</Text>
            ) : null
          }  

        <Button 
        style={styles.button}
        title="Start Search"
        onPress={this.onStart.bind(this)} />

      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,justifyContent:"center", alignItems:"center"
  },
  text: {
    fontSize: 50,
    color: 'red',
  }
});