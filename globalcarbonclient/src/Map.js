import React,{ Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

class Mapcontainer extends Component {
  render(){
    passprops=
    return(
      <Map
         google={this.props.google}
         zoom={8}
         style={mapStyles}
         initialCenter={{ lat: 43.0731, lng: -89.4012}}
       >
        <Marker position={{ lat: 43.0075674, lng: -89.402248}} />
        </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBdVIc2pjEC-dgL8hdFxhrxeJwQrI_jh4s'
})(Mapcontainer);
const mapStyles = {
  width: '100%',
  height: '100%',
};
