import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {mapStyleGrey, mapDarkStyles} from '../../assets/styles/mapStyles';
import PropTypes from 'prop-types';

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

MapContainer.propTypes = {
    address: PropTypes.shape({
        city: PropTypes.string,
        geo: PropTypes.shape({
            lat: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            lng: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        }),
        street: PropTypes.string,
        suite: PropTypes.string,
        zipcode: PropTypes.string
    }),
    google: PropTypes.object
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDqU4ymrsW6iCUxnNhXQa8wyomCmG16Nk4'
  })(MapContainer);