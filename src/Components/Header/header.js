import React from "react";

const Header = props => {
  return (
    <header className="App-header">
      <div className="nav-btn" onClick={props.toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
