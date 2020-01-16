import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoffeeShopList from './components/CoffeeShopList';
import UserSelection from './components/UserSelection';
import axios from 'axios';
import { Tile } from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPage: '',
      coffeeshops: [],
      card: '',
    }
    this.searchForMatch = this.searchForMatch.bind(this);
    this.newSearch = this.newSearch.bind(this);
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
  }
  onSubmit(){
    this.setState({ defaultPage: UserSelection })
  }

  newSearch(){
    this.setState({ defaultPage: UserSelection })
  }

  searchForMatch(neighborhood, parking, wifi, food, alcohol) {
    fetch(`http://localhost:3000/match?neighborhood=${neighborhood}&parking=${parking}&wifi=${wifi}&food=${food}&alcohol=${alcohol}`)
      .then(function(response) {

        return response.json()
      }).then((json) => {
        console.log(json);
        this.setState({
          coffeeshops: json,
          defaultPage: CoffeeShopList,
      })
    })
        
        .catch((error) => {
          this.setState({ error: "no matches found"})
        })  
  }

  handleYup(card){
    console.log('yup');
  }

  handleNope(card){
    console.log('nope');
  }
  render() {
    return (
      <View style={styles.container}>
      
      {this.state.defaultPage == ''  && ( 
          <UserSelection searchForMatch={this.searchForMatch} />
      )} 

      {this.state.defaultPage == UserSelection  && ( 
          <UserSelection searchForMatch={this.searchForMatch} />
      )} 

      {this.state.defaultPage == CoffeeShopList && (
        <CoffeeShopList
          coffeeshops={this.state.coffeeshops}
          card={this.state.card}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          newSearch={this.newSearch}
        />
      )}
        {/* <Text style={styles.text}>Select your choices </Text> */}
      {/* <UserSelection></UserSelection> */}
      {/* <CoffeeShop></CoffeeShop> */}
      </View>
    )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  }
});
