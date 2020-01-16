import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tile } from 'react-native-elements'
import SwipeCards from 'react-native-swipe-cards';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      cards: props.list
    }
  }

  render() {
    return(
      // <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
      //   <Text>{this.props.name}</Text>
      // </View>
      <View   
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{this.props.name}</Text> 
      <Tile
        // imageSrc={require('../assets/icon.png')}
        imageSrc={{ uri: this.props.img }}
        title={this.props.name}
        contentContainerStyle={{ height: 70 }}
      >
        <Text>{this.props.address}</Text>
        <Text>{this.props.name}</Text>
      </Tile> 
      </View> 
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more matches!</Text>
      </View>
    )
  }
}

class CoffeeShop extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.list);
    this.state = {
      cards: props.list,
    }
  }
  render() {
    return (
      <SwipeCards 
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
    /> )
  }

  
}
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})

CoffeeShop.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  neighborhood: PropTypes.string,
  img: PropTypes.string,
}

export default CoffeeShop;