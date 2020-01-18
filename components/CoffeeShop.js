import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
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
      
            <Tile
          // imageSrc={require('../assets/icon.png')}
          imageSrc={{ uri: this.props.img }}
          title={this.props.name}
          contentContainerStyle={{ height: 60 }}
        >
          <Text>{this.props.address}</Text>
          <Text>{this.props.neighborhood}</Text>
        </Tile>  

      
        
      </View> 
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }
    onButtonSearch() {
    this.props.backToSearch()
    }
  

  render() {
    console.log('no more matches');
    
    return (
      <View>
        <Tile
          // imageSrc={require('../assets/icon.png')}
        > 
        <Text>No More Matches!</Text>

          <Button 
            // style={{ flex: 1}}
            title="New Search"
            onPress={this.onButtonSearch.bind(this)} />
        </Tile> 
      </View> 

//       <View style={styles.card}>

      

//         <Text style={styles.noMoreCardsText}>No more matches!</Text>
// {/* 
//         
//       </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
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

NoMoreCards.propTypes = {
  backToSearch: PropTypes.func,

}

export default CoffeeShop;