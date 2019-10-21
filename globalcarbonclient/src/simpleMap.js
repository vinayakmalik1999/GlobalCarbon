import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import axios from 'axios'
class SimpleMap extends Component  {
  constructor(props){
    super(props)


    this.state={
      center:{lat: 11.0168, lng: 76.9558 },
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407},
              {latitude: 43.075690, longitude: -89.402243}],
        store:"",
      zoom:4

    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/getData'
)
    .then(response => {

      this.setState({
        store:response.data,

      })

      console.log(this.state.store)

    })
    .catch(error => {
      console.log(error);

    });
  }
  displayMarkers = () => {
    return this.state.stores.map((box, index) => {
      return <Marker key={index} id={index}
       lat= {box.latitude}
       lng= {box.longitude}
         text="My Marker"
           color = "black"

 />
    })
  }
  render(){
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBdVIc2pjEC-dgL8hdFxhrxeJwQrI_jh4s' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        {this.displayMarkers()}
        </GoogleMapReact>
      </div>
    );
}
}
export default SimpleMap;
