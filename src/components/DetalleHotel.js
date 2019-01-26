import React, { Component } from 'react';
import { ScrollView, Image, ImageBackground,FlatList, Text, View, TouchableOpacity } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon as IconEnty} from 'react-native-vector-icons/Entypo';
import Comentarios from './Comentarios.js'
import Habitaciones from './Habitaciones.js'
import Descripcion from './Descripcion.js'
import Servicios from './Servicios.js';
class DetalleHotel extends React.Component {
    state = { verComentarios:false}
    countPerson(habitaciones){
        let acum=0;
        if(habitaciones && Array.isArray(habitaciones)){
            for(let i=0; i<habitaciones.length;i++){
                acum += habitaciones[i].personas;
            }
        }
        return acum;    
    }
    verComentarios(){
        let flag = !this.state.verComentarios;
        this.setState({verComentarios:flag})        
    }
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
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icon name="location-arrow" size={20} color="#900" />
                        <Text>{hotel.direccion}</Text>
                    </View>
                </Card>
                <Card >
                    <TouchableOpacity onPress= {()=> this.verComentarios()} >
                      <Text style={{fontSize:18}}>Comentarios</Text>
                    </TouchableOpacity>
                    {  
                     this.state.verComentarios ? (<Comentarios comentarios={hotel.opiniones} />):
                     (<Text onPress= {()=> this.verComentarios()}>Ver comentarios</Text>)       
                    }
                </Card>
                <Card>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                           <Text>Habitaciones</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',marginLeft:15}}>
                            <Icon name="users" size={20} color="#000000" style={{opacity:0.54}}/> 
                            <Text> {this.countPerson(hotel.habitaciones)}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name="bed" size={20} color="#000000" style={{opacity:0.54}} /> 
                            <Text> {hotel.habitaciones.length}</Text>
                        </View>
                    </View>
                   <Habitaciones habitaciones = {hotel.habitaciones}/>
                </Card>
                <Descripcion descripcion={hotel.descripcion}/>
                <Servicios servicio={hotel.servicios}/>
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