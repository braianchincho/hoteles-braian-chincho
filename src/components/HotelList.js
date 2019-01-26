import React, { Component } from 'react';
import { ScrollView, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Card, Rating, Button } from 'react-native-elements';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Info from './Info.js'
import { Actions } from 'react-native-router-flux';


class HotelList extends React.Component {
  state = {
    firstQuery: '',
    hoteles: Info.hoteles

  };//end state
  filtraHoteles(){
    let hotelesFilter = this.state.hoteles;
    if(this.state.firstQuery){
      hotelesFilter = this.state.hoteles.filter((item) => {
        if(item.name.includes(this.state.firstQuery)) return item;
      });
    }
    
    return hotelesFilter;
  }
  puntuar(ranking, index) {
    let copy = this.state.hoteles;
    copy[index].ranking = ranking;
    this.setState({ hoteles: copy })
  }
  render() {
    const { firstQuery } = this.state;
    let hoteles = this.filtraHoteles()
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ScrollView >
          <Searchbar
            placeholder="Buscar"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            onIconPress={()=> {hoteles=this.filtraHoteles()}}
            value={firstQuery}
          />
          {
            hoteles.map((item, index) => (
              <Card
                // title={item.name}
                image={{ uri: item.foto }}
                key={item.id}
              >
                <Text style={{ fontSize: 18 }}>
                  {item.name}
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <StarRatingBar
                    readOnly={false}
                    continuous={false}
                    score={item.ranting}
                    onStarValueChanged={(score) => { this.puntuar(score, index) }}
                  />
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text>Precio por noche</Text>
                    <Text>ARS {item.precio}</Text>
                  </View>
                </View>
                <View style={{padding:14}}>
                  <Button
                    // icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{ flex: 1, padding: 15, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Ver ahora'
                    onPress={() => { Actions.detalleHotel({ hotel: item }) }}
                   />
                </View>
              </Card>
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
    backgroundColor: '#F1F1F1',
    justifyContent: "flex-start",
    padding: 14
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },

});


export default HotelList;



