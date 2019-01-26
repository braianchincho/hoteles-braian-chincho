import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import { Card,ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { robotoWeights } from 'react-native-typography'

export default class Servicios extends React.Component{

    render(){
        let {servicio} = this.props;
        return (
            <Card>
                <View style={styles.container}>
                    <Text style={[robotoWeights.regular,styles.title]}>
                      Cancelación/Prepago
                    </Text>
                    <Text>{servicio.cancelacion}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={[robotoWeights.regular,styles.title]}>
                        Servicios opcionales de habitación
                    </Text>
                    <Text style={[robotoWeights.regular,{fontSize:12}]}>
                      {servicio.opcionales}
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={[robotoWeights.regular,styles.title]}>
                        Servicios incluídos en la reserva
                    </Text>
                    <Text style={[robotoWeights.regular,{fontSize:12}]}>
                       {servicio.incluidos}
                    </Text>
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
        fontSize:18,
        color:'#000000',
        padding:10
    }
  
  });