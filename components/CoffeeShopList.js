/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { Tile } from 'react-native-elements'
import NoMoreMatchPage from './NoMoreMatchPage';

class CoffeeShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeshops: props.coffeeshops,
      card: props.card,
      defaultPage: CoffeeShopList
    }
  }
  
  UNSAFE_componentWillReceiveProps() {
    this.setState({
      coffeeshops: this.props.coffeeshops,
    })
  }

  render() {
    return (
      <SwipeCards 
      cards={this.state.coffeeshops}
      renderCard={(cardData) => <CoffeeShop {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards backToSearch={this.props.backToSearch} />}
      handleYup={this.props.handleYup}
      handleNope={this.props.handleNope}
    /> 
    )}
}

class CoffeeShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      cards: props.list
    }
  }

  render() {
    return(
      <View   
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',
      backgroundColor: '#f8f3e6',
      fontFamily:'SpicyRice-Regular'}}>
  
      <Tile
      // imageSrc={require('../assets/icon.png')}
      titleStyle={{fontFamily:'SpicyRice-Regular',

      
      }}
      
      imageSrc={{ uri: this.props.img }}
      title={this.props.name}
      contentContainerStyle={{ height: 60 }}
    >
          <Text style={{
        fontSize: 14,
        fontFamily:'AvenirNext-Medium'
        }}>{this.props.address}</Text>
          <Text style={{
        fontSize: 14,
        fontFamily:'AvenirNext-Medium'
        }}>{this.props.neighborhood}</Text>
      </Tile>
      </View> 
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
    onButtonSearch() {
    this.props.backToSearch()
    }

  render() {
    console.log('no more matches');
    return (
      <NoMoreMatchPage backToSearch={this.props.backToSearch}></NoMoreMatchPage>
      // <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',
      // alignItems:"center",
      // backgroundColor: '#f8f3e6'}}>
      //   {/* apply style to hide image */}
      //   <Tile titleStyle={{height: 100}}>

      //   <Text style={{fontFamily:'SpicyRice-Regular',
      // height: 150,
      // justifyContent: 'center',
      // alignSelf: 'stretch',
      // alignItems:"center",
      // flex: 3, flexDirection: 'column'}}>No More Matches!</Text>

      //     <Button 
      //       // style={{ flex: 1}}
      //       title="New Search"
      //       onPress={this.onButtonSearch.bind(this)} />
      //   </Tile> 
      // </View> 
    )}
}

export default CoffeeShopList;