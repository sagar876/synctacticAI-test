import React from "react";

const Textbox = props => {
  const { type, placeholder, inputRef } = props;
  return (
    <div>
      <input type={type} placeholder={placeholder} ref={inputRef} onKeyPress={(e) => props.onKeyPress(e)}/>
    </div>
  );
};

export default Textbox;
