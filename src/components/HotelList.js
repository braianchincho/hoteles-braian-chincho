import React, { Component } from 'react';
import { ScrollView, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Card, Rating,Button } from 'react-native-elements';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import Info from './Info.js'
import { Actions } from 'react-native-router-flux';


class HotelList extends React.Component {
  state = {
    firstQuery: '',
    hoteles: Info.hoteles

  };//end state
  componentWillMount() {

  }

  alertItemName(item) {
    alert(item.name);
  }
  puntuar(ranking, index) {
    let copy = this.state.hoteles;
    copy[index].ranking = ranking;
    this.setState({ hoteles: copy })
  }
  render() {
    const { firstQuery, hoteles } = this.state;
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ScrollView >
          <Searchbar
            placeholder="Buscar"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
          />
          {
            hoteles.map((item, index) => (
              <Card
                title={item.name}
                image={{ uri: item.foto }}
                key={item.id}
              >
                <StarRatingBar
                  readOnly={false}
                  continuous={false}
                  score={item.ranting}
                  onStarValueChanged={(score) => { this.puntuar(score, index) }}
                />
                <Button
                  // icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#03A9F4'
                  buttonStyle={{flex:1,padding:15, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                  title='Ver ahora' 
                  onPress={() =>{Actions.detalleHotel({hotel:item})}}
                  />
                
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



