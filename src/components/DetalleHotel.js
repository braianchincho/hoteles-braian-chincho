import React, { Component } from 'react';
import { ScrollView, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Card, ListItem } from 'react-native-elements';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome';
import Comentarios from './Comentarios.js'
class DetalleHotel extends React.Component {
    state = { verComentarios:false}
    render() {
        const { hotel } = this.props
        return (
            <ScrollView style={{ flex: 1 }}>
                <Card
                    image={{ uri: hotel.foto }}
                    key={hotel.id}
                    style={{ flex: 1 }}
                >
                    <StarRatingBar
                        readOnly={true}
                        continuous={false}
                        score={hotel.ranting}
                    //onStarValueChanged={(score) => { this.puntuar(score, index) }}
                    />
                    <Text>{hotel.name}</Text>
                </Card>
                <Card title={'Ubicación'}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Icon name="location-arrow" size={20} color="#900" />
                        <Text>{hotel.direccion}</Text>
                    </View>
                </Card>
                <Card >
                    <TouchableOpacity onPress= {()=>{
                        let flag = !this.state.verComentarios;
                        this.setState({verComentarios:flag})}
                        } >
                      <Text style={{fontSize:18}}>Comentarios</Text>
                    </TouchableOpacity>
                    {  
                     this.state.verComentarios ? (<Comentarios comentarios={hotel.opiniones} />):
                     (<Text>Ver comentarios</Text>)       
                    }
                </Card>

            </ScrollView>
        );
    }//end render
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        flex: 1,
        padding: 10,
    }
};

export default DetalleHotel;