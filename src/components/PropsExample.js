import React from "react";

const user = (props) => {
  return (
    <div>
      <h1>Props Example </h1>
      <h5>Hello Mr. {props.name}.!</h5>
      {props.children}

    </div>
  );
};

export default user; 
