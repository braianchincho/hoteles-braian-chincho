import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome';
import { robotoWeights } from 'react-native-typography'

export default class Ubicacion extends React.Component {

    render() {
        let { hotel } = this.props;
        return (
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
                        initialRegion={hotel.region}
                    />
                </View>
            </Card>
        );
    }
}