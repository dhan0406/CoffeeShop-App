/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

class UserSelection extends React.Component {
  state = { neighborhood: '',
  parking: '',
  wifi: '',
  food: '',
  alcohol: ''};
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //   neighborhood: '',
  //   parking: '',
  //   wifi: '',
  //   food: '',
  //   alcohol: '',
  //   queryResults: []
  // };}


  onSubmit() {
    const { neighborhood, parking, wifi, food, alcohol } = this.state;
    this.props.searchForMatch(neighborhood, parking, wifi, food, alcohol )
  }
// make an API call to my Rails backend
  // searchForMatch = (event) => {
  //   event.preventDefault();

  //   console.log(`${this.state.parking}`);
  //   console.log(`${this.state.wifi}`);
  //   axios.get(`http://localhost:3000/match?neighborhood=${this.state.neighborhood}&parking=${this.state.parking}&wifi=${this.state.wifi}&food=${this.state.food}&alcohol=${this.state.alcohol}`)
  //     .then((response) => {
  //       const queryResults = response.data.map(coffeeShop => {
  //         return coffeeShop;
  //       });
  //         this.setState({queryResults});
  //       })
  //       .catch((error) => {
  //         this.setState({ error: "no matches found"})
  //       })
        
  // };

  // build CoffeeShop from my queryResult
  // makeCoffeeShops = () => {
  //   console.log(`${this.state.neighborhood}`);

  //   console.log(`${this.state.parking}`);
  //   console.log(`${this.state.wifi}`);
  //     return this.state.queryResults.map((coffeeshop) => {
  //     return (<CoffeeShop
  //         key={coffeeshop.id}
  //         id={coffeeshop.id}
  //         name={coffeeshop.name}
  //         address={coffeeshop.address}
  //         neighborhood={coffeeshop.neighborhood}
  //         img={coffeeshop.img}
  //       />)
  //   })
  // }

  render() {
    let neighborhood = [{ value: 'Capitol Hill'}, { value: 'Downtown'}, {value: 'International District'}, { value: 'SLU'}, { value: 'Ravenna'}, { value: 'U-District'}, { value: 'Ballard'}, { value: 'Fremont'}, { value: 'Wallingford'}];
  
    let parking = [{ value: 'lot', label: 'Lot/Garage'}, { value: 'street'}]

    let wifi = [{ value: 'true', label: 'Yes'}, { value: 'false', label: 'No'}]

    let food = [{ value: 'true', label: 'Yes'}, { value: 'false', label: 'No'}]

    let alcohol = [{ value: 'true', label: 'Yes'}, { value: 'false', label: 'No'}]

  return (
    <View style={styles.formContainer}>
      <Dropdown
        containerStyle={styles.dropdown}
        label='Neighborhood'
        data={neighborhood}
        value={this.state.neighborhood}
        onChangeText={neighborhood => this.setState({neighborhood})}
        />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Parking'
        data={parking}
        value={this.state.parking}
        onChangeText={parking => this.setState({parking})}
        />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Free Wifi'
        data={wifi}
        value={this.state.wifi}
        onChangeText={wifi => this.setState({wifi})} />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Food'
        data={food}
        value={this.state.food}
        onChangeText={food => this.setState({food})} />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Alcohol'
        data={alcohol}
        value={this.state.alcohol}
        onChangeText={alcohol => this.setState({alcohol})} />


      <Button 
        title="Submit"
        onPress={this.onSubmit.bind(this)} />

    </View>


  )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dropdown: {
    width: '80%',
  }
})

export default UserSelection;