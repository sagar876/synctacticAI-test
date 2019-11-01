import React, { Component } from "react";
import Header from "../../Components/Header/header";
import GoogleMap from "../../Components/GoogleMap/googleMap";
import NavBar from "../../Components/NavigationBar/navbar";
import TextBox from "../../Components/CustomComponents/textbox";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    };
  }

  toggleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  };
  render() {
    const { navbarOpen } = this.state;
    return (
      <div className="home--wrapper">
        <Header toggleNavbar={this.toggleNavbar} />
        <div
          className={navbarOpen ? "navbar--wrapper open" : "navbar--wrapper"}
        >
          {navbarOpen ? <NavBar /> : null}
        </div>
        <div className="map--container">
            <GoogleMap />
        </div>
      </div>
    );
  }
}
