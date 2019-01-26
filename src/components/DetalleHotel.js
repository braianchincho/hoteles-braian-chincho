import React, { Component } from 'react';
import { ScrollView, Image, ImageBackground, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { Card, ListItem, Tile } from 'react-native-elements';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome';
import Comentarios from './Comentarios.js'
import Habitaciones from './Habitaciones.js'
import Descripcion from './Descripcion.js'
import Servicios from './Servicios.js';
import { robotoWeights } from 'react-native-typography'
import { Ubicacion } from './Ubicacion.js'

class DetalleHotel extends React.Component {
    state = { verComentarios: false }
    countPerson(habitaciones) {
        let acum = 0;
        if (habitaciones && Array.isArray(habitaciones)) {
            for (let i = 0; i < habitaciones.length; i++) {
                acum += habitaciones[i].personas;
            }
        }
        return acum;
    }
    verComentarios() {
        let flag = !this.state.verComentarios;
        this.setState({ verComentarios: flag })
    }
    render() {
        const { hotel } = this.props
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Tile
                        imageSrc={{ uri: hotel.foto }}
                        imageContainerStyle={{ height: 30 }}
                    />
                    {/* <Ubicacion hotel={hotel}/> */}
                    <Card title={hotel.name}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <StarRatingBar
                                readOnly={true}
                                continuous={false}
                                score={hotel.ranting}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 8 }}>
                            <Icon name="location-arrow" size={20} color="#000000" style={{ padding: 5 }} />
                            <Text style={[robotoWeights.regular, { fontSize: 14, marginRight: 5 }]}>
                                {hotel.direccion}
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 8 }}>
                            <MapView
                                style={{ flex: 1, width: 250, height: 250 }}
                                region={hotel.region}
                            />
                        </View>
                    </Card>
                    <Card >
                        <TouchableOpacity onPress={() => this.verComentarios()} >
                            <Text style={[robotoWeights.regular, { fontSize: 18, color: '#000000' }]}>Comentarios</Text>
                        </TouchableOpacity>
                        {
                            this.state.verComentarios ? (<Comentarios comentarios={hotel.opiniones} />) :
                                (<Text onPress={() => this.verComentarios()}>Ver comentarios</Text>)
                        }
                    </Card>
                    <Card>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={[robotoWeights.regular, { fontSize: 18, color: '#000000' }]}>
                                    Habitaciones
                               </Text>
                                <Icon name="users" size={20} color="#000000" style={styles.habitacionRow} />
                                <Text > {this.countPerson(hotel.habitaciones)}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Icon name="bed" size={20} color="#000000" style={styles.habitacionRow} />
                                <Text> {hotel.habitaciones.length}</Text>
                            </View>
                        </View>
                        <Habitaciones habitaciones={hotel.habitaciones} />
                    </Card>
                    <Descripcion descripcion={hotel.descripcion} />
                    <Servicios servicio={hotel.servicios} />

                </ScrollView>
            </View>
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
    },
    habitacionRow:{opacity: 0.54 ,marginLeft:20}
};

export default DetalleHotel;