import React from "react";

const TextInput = (props) => {
  return (
    <div className="input-form">
      <input {...props} className="input-control" />
    </div>
  );
};
export default TextInput;
