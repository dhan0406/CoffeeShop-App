/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

import Communications from 'react-native-communications';

class MatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
    }
  }
    onPress(){
      this.props.backToHome()
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 35, fontFamily:'AvenirNext-Medium' }}>It's a match!</Text>
        <Text>{' '}</Text>
        <Text>{' '}</Text>
        <Text style={{fontSize: 20, fontFamily:'AvenirNext-Medium', textAlign:"center"}}>{this.state.card.name} located in {this.state.card.neighborhood}</Text>
        <Text>{' '}</Text>
        <Button 
          buttonStyle={{backgroundColor:'#f07b3f'}}
          type="solid"
          titleStyle={{fontFamily:'AvenirNext-Medium'}}
          title="Text to Share Location"
          style = {styles.button}
          onPress={() => Communications.text('', `Hey! I'm going to ${this.state.card.name}`)}>
          
        </Button>
        <Text>{' '}</Text>

        <Button 
          buttonStyle={{backgroundColor:'#2c2627'}}
          type="solid"
          titleStyle={{fontFamily:'AvenirNext-Medium'}}
          title="Back to Home"
          style = {styles.button}
          onPress={this.onPress.bind(this)}>
          
        </Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,justifyContent:"center",backgroundColor:"#fff", alignItems:"center",
    fontFamily:'AvenirNext-Medium'
  },
  text: {
    fontSize: 20,
  }
});

export default MatchPage;