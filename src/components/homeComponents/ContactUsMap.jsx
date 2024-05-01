import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class ContactUsMap extends Component {
  render() {
    const mapStyles = {
      width: "50%",
      height: "200px",
    };

    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{ lat: 6.4616, lng: 3.1958 }} // Center the map to a default location
      >
        <Marker position={{ lat: 6.4616, lng: 3.1958 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCz2W4ZPW2W39WvBV77bT37UPn50PCTMnA",
})(ContactUsMap);
