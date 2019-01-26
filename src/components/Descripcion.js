import React from 'react';
import { Text, View} from 'react-native';
import { Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Descripcion extends React.Component{

    render(){
        const {descripcion} = this.props;
        return (
          <Card title={'Descripción'}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{marginLeft:30}}>
                  <Icon name="clock-o" size={20} color="#000000" style={{opacity:0.54}} /> 
                </View>
                <View style={{marginLeft:50}}>
                    <Text>Entrada: A partir de las {descripcion.horaEntrada} hs</Text>
                    <Text>salida: Hasta las {descripcion.horaSalida} hs</Text>
                </View>
            </View>
          </Card>
        );
    }
}