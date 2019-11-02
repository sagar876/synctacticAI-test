import React, { Component } from "react";

export default class TextBox extends Component {
  render() {
    const { type, placeholder } = this.props;
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          ref={this.props.inputRef}
        />
      </div>
    );
  }
}
