import React from 'react';
import { ListItem } from 'react-native-elements';

export default class Comentarios extends React.Component {
    state = {comentarios:[]}

    render(){
        const {comentarios} = this.props
        if(this.props.comentarios){
            return(
                comentarios.map(
                    (opinion, index) => (
                        <ListItem
                            key={index}
                            roundAvatar
                            avatar={{uri:opinion.usuario.foto}}
                           // leftAvatar={ { uri: opinion.usuario.foto } }
                            title={opinion.usuario.name}
                            subtitle={opinion.contenido}
                        />
                    )
                )
            );
        }else{
            return(<Text>No hay comenterios</Text>);
        }
        
    }//end render
}