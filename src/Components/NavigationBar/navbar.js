import React from "react";

const navigationData = [
  {
    name: "Page 1",
    id: "1"
  },
  {
    name: "Page 2",
    id: "2"
  },
  {
    name: "Page 3",
    id: "3"
  },
  {
    name: "Page 4",
    id: "4"
  }
];

const listItemStyle = {
  "listStyleType": "none",
  color: "#fff",
  margin: "10px 0",
  cursor: "pointer"
};

const NavBar = props => {
  return (
    <ul>
      {navigationData.map(list => (
        <li key={list.id} style={listItemStyle}>
          {list.name}
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
