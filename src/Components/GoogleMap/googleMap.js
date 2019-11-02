import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const mapStyles = {
  width: "400px",
  height: "400px",
  position: "relative",
  margin: "20px auto"
};
export class GoogleMap extends Component {
  render() {
    const { lat, lng } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat,
          lng
        }}
        center={{lat,lng}}
      >
        <Marker position={{ lat, lng }} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAUhkbNC-dTqjNCOz_chR_driQfi1IvKjI"
})(GoogleMap);
