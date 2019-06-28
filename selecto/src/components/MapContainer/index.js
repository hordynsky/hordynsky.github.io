import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {mapStyleGrey, mapDarkStyles} from '../../assets/styles/mapStyles';

const mapStyles = {
    width: '100%',
    height: '500px',
};

class MapContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const initialCntr = {
            lat: parseFloat(this.props.address.geo.lat),
            lng: parseFloat(this.props.address.geo.lng) 
        }
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              styles= {mapStyleGrey}
              initialCenter={initialCntr}
            />
        );
      }
}

MapContainer.defaultProps = {
    address: {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDqU4ymrsW6iCUxnNhXQa8wyomCmG16Nk4'
  })(MapContainer);