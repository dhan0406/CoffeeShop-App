/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CoffeeShop from './CoffeeShop';
import { Tile } from 'react-native-elements'

class CoffeeShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeshops: props.coffeeshops,
      card: props.card,
      defaultPage: CoffeeShopList
    }
  }
  
  // 
  UNSAFE_componentWillReceiveProps() {
    this.setState({
      coffeeshops: this.props.coffeeshops,
    })
  }

  onButtonPress() {
    this.props.newSearch()
  }

  render() {
    return (
      <View>
        {/* <Button 
        style={{ flex: 1}}
        title="New Search"
        onPress={this.onButtonPress.bind(this)} /> */}

        <CoffeeShop
          newSearch={this.props.newSearch}
          handleNope={this.props.handleNope}
          handleYup={this.props.handleYup}
          list={this.state.coffeeshops}
          />


      </View>
    )
  }
}

  export default CoffeeShopList;