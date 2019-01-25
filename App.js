import React from 'react';
import { ScrollView, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Card, Rating } from 'react-native-elements'
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'


export default class App extends React.Component {
  state = {
    firstQuery: '',
    hoteles: [
      {
        id: 1,
        name: 'Holiday Inn Cordoba',
        foto: 'https://r-ec.bstatic.com/images/hotel/max1024x768/276/27661035.jpg',
        ranting: 3,
        precio: 1500,
      },
      {
        id: 2,
        name: 'Quorum Córdoba Hotel',
        foto: 'http://www.quorumhotel.com.ar/alojamiento/web/images/quorumhotel3.jpg',
        ranting: 5,
        precio: 2500,
      },
      {
        id: 3,
        name: 'Sheraton Cordoba Hotel',
        foto: 'http://hoteles.en-la-argentina.com.ar/images/hoteles/1397337816-2.jpg',
        ranting: 4,
        precio: 1900,
      },
      {
        id: 4,
        name: 'Duncal',
        foto: 'https://cdn.bestday.net/_lib/vimages/Cordoba-Argentina/Hotels/Ducal-Suites-Hotel/fachada_g.jpg',
        ranting: 3,
        precio: 1460,

      },
    ],

  };//end state
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
                {/* <StarRating
                  disabled={false}
                  style={styles.starStyle}
                  maxStars={5}
                  rating={item.ranting}   
                  selectedStar={(rating) => this.puntuar(rating, index)}
                /> */}
                {/* <Rating
                  showRating
                  onFinishRating={(rating) => this.puntuar(rating, index)}
                  onStartRating={this.ratingStarted}
                  ratingCount={3}
                  startingValue={item.rating}
                  style={{ width: 10, height: 4, imageSize: 5 }}
                /> */}  

                <StarRatingBar
                  readOnly={false}
                  continuous={false}
                  score={item.ranting}
                  onStarValueChanged={(score) => {this.puntuar(score,index)}}
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
  carta: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // position: 'relative',
    backgroundColor: '#fff',
    padding: 24,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  starStyle: {
    width: 10,
    height: 5,
    marginBottom: 0,
  }
});
