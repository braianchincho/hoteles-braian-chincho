import React from 'react';
import { AppRegistry,Text} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HotelList from './src/components/HotelList.js';
import DetalleHotel from './src/components/DetalleHotel.js'

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="hotelList" component={HotelList} title="Hoteles" initial/>
      <Scene key="detalleHotel" component={DetalleHotel} title="Detalle"  />
    </Scene>
  </Router>
);
export default App;
AppRegistry.registerComponent('hoteles', () => App);
