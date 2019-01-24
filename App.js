import React from 'react';
import {ScrollView,Image,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    firstQuery: '',
    hoteles: [
      {
        id: 1,
        name: 'Holiday Inn Cordoba',
        foto: 'https://r-ec.bstatic.com/images/hotel/max1024x768/276/27661035.jpg'
      },
      {
        id: 2,
        name: 'Quorum Córdoba Hotel',
        foto: 'http://www.quorumhotel.com.ar/alojamiento/web/images/quorumhotel3.jpg'
      },
      {
        id: 3,
        name: 'Sheraton Cordoba Hotel',
        foto: 'http://hoteles.en-la-argentina.com.ar/images/hoteles/1397337816-2.jpg'
      },
      {
        id: 4,
        name: 'Duncal',
        foto: 'https://cdn.bestday.net/_lib/vimages/Cordoba-Argentina/Hotels/Ducal-Suites-Hotel/fachada_g.jpg'
      },
    ],

  };//end state
  alertItemName(item){
    alert("puto el que lee");
  }
  render() {
    const { firstQuery,hoteles } = this.state;
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ScrollView >   
          <Searchbar
              placeholder="Buscar"
              onChangeText={query => { this.setState({ firstQuery: query }); }}
              value={firstQuery}
          />
          {
            this.state.hoteles.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={styles.container}
                onPress={() => this.alertItemName(item)}
              >
                <Text style={styles.text}>
                  {item.name}
                </Text>
                <Image
                  source={{ uri: item.foto }}
                  style={{ width: 200, height: 200 }}
                />
              </TouchableOpacity>
            ))
            }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: "flex-start",
    padding:14
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
    },
  text: {
      color: '#030303'
   },

});
