import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Card} from 'react-native-elements';
import { robotoWeights } from 'react-native-typography'
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
                    <Text style={[robotoWeights.regular,{fontSize:14}]}>Entrada: A partir de las {descripcion.horaEntrada} hs</Text>
                    <Text style={[robotoWeights.regular,{fontSize:14}]}>salida: Hasta las {descripcion.horaSalida} hs</Text>
                </View>
            </View>
          </Card>
        );
    }
}
const styles = StyleSheet.create({
    container: {
       borderBottomColor: '#000000',
       borderBottomWidth: 1,
       padding:10
    },
    title:{
        fontSize:18,color:'#fff'
    }
  
  });