/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-elements';


class UserSelection extends React.Component {
  state = { neighborhood: '',
    parking: '',
    wifi: '',
    food: '',
    alcohol: ''};

  onSubmit() {
    const { neighborhood, parking, wifi, food, alcohol } = this.state;
    this.props.searchForMatch(neighborhood, parking, wifi, food, alcohol )
  }

  render() {
    let neighborhood = [{ value: 'Capitol Hill'}, { value: 'Downtown'}, {value: 'International District'}, { value: 'SLU'}, { value: 'Ravenna'}, { value: 'U-District'}, { value: 'Ballard'}, { value: 'Fremont'}, { value: 'Wallingford'}];
  
    let parking = [{ value: 'lot', label: 'Lot/Garage'}, { value: 'street', label: 'Street'}]

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
        label='Free WiFi'
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
        buttonStyle={{backgroundColor:'#2c2627', fontFamily:'SpicyRice-Regular'}}
        titleStyle={{fontFamily:'AvenirNext-Medium'}}
        type="solid"
        title="Search"
        onPress={this.onSubmit.bind(this)} />
    </View>
  )}
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'SpicyRice-Regular'
  },
  dropdown: {
    width: '80%',
    fontFamily: 'SpicyRice-Regular'
  }
})

export default UserSelection;