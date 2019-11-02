import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="nav-btn" onClick={this.props.toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    );
  }
}
