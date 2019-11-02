import React, { Component } from "react";
import Header from "../../Components/Header/header";
import GoogleMap from "../../Components/GoogleMap/googleMap";
import NavBar from "../../Components/NavigationBar/navbar";
import TextBox from "../../Components/CustomComponents/textbox";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      lat: 12.9716,
      lng: 77.5946,
      isCoordinatesValid: false
    };
  }

  toggleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  };

  setMapLocation = () => {
    if (this.latInput.value && this.lngInput.value) {
      this.setState({
        lat: this.latInput.value,
        lng: this.lngInput.value
      });
    } else {
      alert("Please fill in the inputs");
      this.setState({
        //Set default coordinates
        lat: 12.9716,
        lng: 77.5946
      });
    }
  };

  handleEnterKeyPress = e => {
    if (e.which === 13) this.setMapLocation();
  };

  render() {
    const { navbarOpen, lat, lng } = this.state;
    return (
      <div className="home--wrapper">
        <Header toggleNavbar={this.toggleNavbar} />
        <div className="map--container">
          <GoogleMap lat={lat} lng={lng} />
        </div>
        <div className="textbox--container">
          <TextBox
            placeholder={"Latitude"}
            type="number"
            inputRef={input => (this.latInput = input)}
            onKeyPress={e => this.handleEnterKeyPress(e)}
          />
          <br />
          <TextBox
            placeholder={"Longitude"}
            type="number"
            inputRef={input => (this.lngInput = input)}
            onKeyPress={e => this.handleEnterKeyPress(e)}
          />
          <br />
          <button onClick={this.setMapLocation}>Set location</button>
        </div>
        <div
          className={navbarOpen ? "navbar--wrapper open" : "navbar--wrapper"}
        >
          {navbarOpen ? <NavBar /> : null}
        </div>
      </div>
    );
  }
}
