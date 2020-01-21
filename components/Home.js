import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

import * as Font from 'expo-font';


export default class Home extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount( )   {
    Font . loadAsync ( {
          'SpicyRice-Regular' :  require ( '../assets/fonts/SpicyRice-Regular.ttf' ) ,
        } ).then(() => {
        this . setState ( {   fontLoaded :  true   } ) ;
  } );
  }

  onStart() {
    this.props.newSearch()
  }
  render() {
    return(
      <ImageBackground
        imageStyle={{opacity:0.4, }}
        style={{flex:1,justifyContent:"center", alignItems:"center", }}
      
        source={{uri: 'https://live.staticflickr.com/65535/49386732066_b9d1a4c4ed_b.jpg' }}
>
      {
        this.state.fontLoaded? (
          <Text style={ 
            {fontFamily: 'SpicyRice-Regular',
            color: '#2c2627',
            fontSize: 65,
            alignItems: 'center',
            justifyContent:"center"}}>
            Coffee Mate</Text>
            ) : null
          }  

        <Text style={{fontFamily: 'AvenirNext-Medium', fontSize: 16}}>Swipe LEFT for no & swipe RIGHT for yes!</Text>
        <Text>{' '}</Text>
        <Button 
        buttonStyle={{backgroundColor:'#2c2627'}}
        type="solid"
        titleStyle={{fontFamily:'AvenirNext-Medium'}}
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
    fontFamily: 'SpicyRice-Regular',
    fontSize: 50,
    color: 'red',
    flex:1,justifyContent:"center", alignItems:"center"
  }
});