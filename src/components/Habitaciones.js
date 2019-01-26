import React from 'react';
import { ListItem, Card } from 'react-native-elements';
import { ScrollView, Image, FlatList, Text, View, TouchableOpacity } from 'react-native';
export default class Habitaciones extends React.Component {

    render() {
        const { habitaciones } = this.props;
        if (habitaciones) {
            return (
                habitaciones.map((habitacion, index) => {
                    return (
                        <View key={index}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text> Habitación {habitacion.tipo}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text> Personas {habitacion.personas}</Text>
                                {
                                    habitacion.camas.map(
                                        (cama,index) => { return (
                                         <Text key={index}> {cama.cantidad} camas {cama.tipo}</Text>
                                         ); }
                                    )
                                }
                            </View>
                        </View>
                    );
                })
            );
        }

    }//end render
}