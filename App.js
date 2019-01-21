import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    firstQuery: '',
  };
  render() {
    const { firstQuery } = this.state;
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ScrollView>
          <Searchbar
            placeholder="Search"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
           />
          <Text>Prueba scroll View</Text>
          <Text>ljfsgdfoijdfdh</Text>
          <Text>lljfgjdfgjdnfjn </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
    }
});
