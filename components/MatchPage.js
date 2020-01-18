/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Communications from 'react-native-communications';



class MatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>You've been matched!</Text>
        <Text>{this.state.card.name}</Text>

        <Button 
          title="send text"
          style = {styles.button}
          onPress={() => Communications.text('0123456789', 'Test Text Here')}>
          
        </Button>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,justifyContent:"center",backgroundColor:"#fff", alignItems:"center"
  },
  button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor:"#307cae",
    marginTop : 20,
  },
  text: {
    fontSize: 20,
  }
});

export default MatchPage;