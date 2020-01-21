/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';


class NoMoreMatchPage extends React.Component {
  constructor(props) {
    super(props);
  }
    onButtonSearch() {
      this.props.backToSearch()
      }
  
  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontFamily:'AvenirNext-Medium', fontSize: 20}}>Sorry, there's no more matches!

        </Text>
        <Text> {' '}</Text>
        <Button 
            // style={{ flex: 1}}
            buttonStyle={{backgroundColor:'#2c2627'}}
            type="solid"
            titleStyle={{fontFamily:'AvenirNext-Medium'}}
            title="New Search"
            onPress={this.onButtonSearch.bind(this)} />
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

export default NoMoreMatchPage;