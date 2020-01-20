import React from 'react';
import {YellowBox} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import CoffeeShopList from './components/CoffeeShopList';
import UserSelection from './components/UserSelection';
import MatchPage from './components/MatchPage';
import * as Font from 'expo-font';

YellowBox.ignoreWarnings(['ReactNative.createElement']);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPage: '',
      coffeeshops: [],
      card: '',
      fontLoaded: false,
    }
    this.searchForMatch = this.searchForMatch.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    this.newSearch = this.newSearch.bind(this);
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
  }
  // componentDidMount() {
  //   Font.loadAsync({
  //     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  onSubmit(){
    this.setState({ defaultPage: UserSelection })
  }

  newSearch(){
    this.setState({ defaultPage: UserSelection })
  }

  backToSearch(){
    this.setState({ defaultPage: UserSelection })
  }

  searchForMatch(neighborhood, parking, wifi, food, alcohol) {
    fetch(`http://52.25.68.111//match?neighborhood=${neighborhood}&parking=${parking}&wifi=${wifi}&food=${food}&alcohol=${alcohol}`)
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
    console.log(card);
    this.setState({
      defaultPage: MatchPage,
      card: card,
    })
  }

  handleNope(card){
    console.log('nope');
  }
  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
      
      {this.state.defaultPage == ''  && ( 
        <Home newSearch={this.newSearch}/>
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
          backToSearch={this.backToSearch}
        />
      )}

      {this.state.defaultPage == MatchPage && (
        <MatchPage
          card={this.state.card}
        />
      )}
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
