const Info ={
    hoteles: [
        {
          id: 1,
          name: 'Holiday Inn Cordoba',
          foto: 'https://r-ec.bstatic.com/images/hotel/max1024x768/276/27661035.jpg',
          ranting: 3,
          precio: 1500,
          region : {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          direccion:'Fray Luis Beltran Y Cardenosa B Poeta Lugones - CC Libertad, 5008 Córdoba',
          servicios:{
            cancelacion:'Las condiciones de cancelación y de pago por adelantado pueden variar según el tipo de pago',
            opcionales:'Los siguientes cargos y depósitos se pagan directamente en el hotel al recibir el servicio',
            incluidos:'Desayuno incluido'
          },
          descripcion:{
            horaEntrada:9,
            horaSalida:21,
            texto:''
          },
          habitaciones:[
            {
              tipo:'Standard',
              personas:2,
              camas:[
                {tipo:'Doble',cantidad:1}
              ]
            },
            {
              tipo:'Standard',
              personas:4,
              camas:[
                {tipo:'Doble',cantidad:1},
                {tipo:'Simple',cantidad:2}
              ]
            },
          ],
          opiniones:[
             {
                usuario:{
                  id:1,
                  name:'Amy Farha',
                  foto:'https://www.capital.cl/wp-content/uploads/2016/11/mujer.jpg'
                },
                contenido:'Un gran hotel'
             },
             {
                usuario:{
                  id:2,
                  name:'Amanda Martin',
                  foto:'https://www.muyinteresante.com.mx/wp-content/uploads/2018/08/audicio%CC%81n.jpg'
                },
                contenido:'Muy lindo excelente ubicación'
             },
             {
                usuario:{
                  id:3,
                  name:'Melissa',
                  foto:'https://osteosalud.cl/wp-content/uploads/2016/12/Mujer-joven-latina-sonriendo.jpg'
                },
                contenido:'Bastante agradable '
             }
          ]
        },
        {
          id: 2,
          name: 'Quorum Córdoba Hotel',
          foto: 'http://www.quorumhotel.com.ar/alojamiento/web/images/quorumhotel3.jpg',
          ranting: 5,
          precio: 2500,
          region :{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          direccion:'Avenida La Voz del Interior 7000, Córdoba',
          servicios:{
            cancelacion:'Las condiciones de cancelación y de pago por adelantado pueden variar según el tipo de pago',
            opcionales:'Los siguientes cargos y depósitos se pagan directamente en el hotel al recibir el servicio',
            incluidos:'Desayuno incluido'
          },
          descripcion:{
            horaEntrada:9,
            horaSalida:21,
            texto:''
          },
          habitaciones:[
            {
              tipo:'Standard',
              personas:2,
              camas:[
                {tipo:'Doble',cantidad:1}
              ]
            },
            {
              tipo:'Standard',
              personas:4,
              camas:[
                {tipo:'Simple',cantidad:2},
              ]
            },
          ],
          opiniones:[
             {
                usuario:{
                  id:1,
                  name:'Amy Farha',
                  foto:'https://www.capital.cl/wp-content/uploads/2016/11/mujer.jpg'
                },
                contenido:'Un gran hotel'
             },
             {
                usuario:{
                  id:2,
                  name:'Amanda Martin',
                  foto:'https://www.muyinteresante.com.mx/wp-content/uploads/2018/08/audicio%CC%81n.jpg'
                },
                contenido:'Muy lindo excelente ubicación'
             },
             {
                usuario:{
                  id:3,
                  name:'Melissa',
                  foto:'https://osteosalud.cl/wp-content/uploads/2016/12/Mujer-joven-latina-sonriendo.jpg'
                },
                contenido:'Bastante agradable '
             }
          ]
        },
        {
          id: 3,
          name: 'Sheraton Cordoba Hotel',
          foto: 'http://hoteles.en-la-argentina.com.ar/images/hoteles/1397337816-2.jpg',
          ranting: 4,
          precio: 1900,
          region :{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          direccion:'Duarte Quirós 1300, X5000 Córdoba',
          servicios:{
            cancelacion:'Las condiciones de cancelación y de pago por adelantado pueden variar según el tipo de pago',
            opcionales:'Los siguientes cargos y depósitos se pagan directamente en el hotel al recibir el servicio',
            incluidos:'Desayuno incluido'
          },
          descripcion:{
            horaEntrada:9,
            horaSalida:21,
            texto:''
          },
          habitaciones:[
            {
              tipo:'Standard',
              personas:4,
              camas:[
                {tipo:'Doble',cantidad:1},
                {tipo:'Simple',cantidad:2}
              ]
            },
          ],
          opiniones:[
             {
                usuario:{
                  id:1,
                  name:'Amy Farha',
                  foto:'https://www.capital.cl/wp-content/uploads/2016/11/mujer.jpg'
                },
                contenido:'Un gran hotel'
             },
             {
                usuario:{
                  id:2,
                  name:'Amanda Martin',
                  foto:'https://www.muyinteresante.com.mx/wp-content/uploads/2018/08/audicio%CC%81n.jpg'
                },
                contenido:'Muy lindo excelente ubicación'
             },
             {
                usuario:{
                  id:3,
                  name:'Melissa',
                  foto:'https://osteosalud.cl/wp-content/uploads/2016/12/Mujer-joven-latina-sonriendo.jpg'
                },
                contenido:'Bastante agradable '
             }
          ]
        },
        {
          id: 4,
          name: 'Duncal',
          foto: 'https://cdn.bestday.net/_lib/vimages/Cordoba-Argentina/Hotels/Ducal-Suites-Hotel/fachada_g.jpg',
          ranting: 3,
          precio: 1460,
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          direccion:'Corrientes 207, X5022FGE Córdoba',
          servicios:{
            cancelacion:'Las condiciones de cancelación y de pago por adelantado pueden variar según el tipo de pago',
            opcionales:'Los siguientes cargos y depósitos se pagan directamente en el hotel al recibir el servicio',
            incluidos:'Desayuno incluido'
          },
          descripcion:{
            horaEntrada:9,
            horaSalida:21,
            texto:''
          },
          habitaciones:[
            {
              tipo:'Standard',
              personas:1,
              camas:[
                {tipo:'Simple',cantidad:1}
              ]
            },
            {
              tipo:'Standard',
              personas:6,
              camas:[
                {tipo:'Doble',cantidad:2},
                {tipo:'Simple',cantidad:2}
              ]
            },
          ],
          opiniones:[
             {
                usuario:{
                  id:1,
                  name:'Amy Farha',
                  foto:'https://www.capital.cl/wp-content/uploads/2016/11/mujer.jpg'
                },
                contenido:'Un gran hotel'
             },
             {
                usuario:{
                  id:2,
                  name:'Amanda Martin',
                  foto:'https://www.muyinteresante.com.mx/wp-content/uploads/2018/08/audicio%CC%81n.jpg'
                },
                contenido:'Muy lindo excelente ubicación'
             },
             {
                usuario:{
                  id:3,
                  name:'Melissa',
                  foto:'https://osteosalud.cl/wp-content/uploads/2016/12/Mujer-joven-latina-sonriendo.jpg'
                },
                contenido:'Bastante agradable '
             }
          ]
    
        },
      ]
}
export default Info;