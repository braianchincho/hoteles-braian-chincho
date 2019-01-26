import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import { Card,ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Servicios extends React.Component{

    render(){
        let {servicio} = this.props;
        return (
            <Card>
                <View style={styles.container}>
                    <Text>Cancelación/Prepago</Text>
                    <Text>{servicio.cancelacion}</Text>
                </View>
                <View style={styles.container}>
                    <Text>Servicios opcionales de habitación</Text>
                    <Text>{servicio.opcionales}</Text>
                </View>
                <View style={styles.container}>
                    <Text>Servicios incluídos en la reserva</Text>
                    <Text>{servicio.incluidos}</Text>
                </View>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
    container: {
       borderBottomColor: 'black',
       borderBottomWidth: 1,
       padding:10
    },
  
  });