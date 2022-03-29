import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <div>ChildComponent</div>
      {/* <button onClick={props.greetHandeler}>Click child</button> */}
      <button onClick={() => props.greetHandeler('child')}>Click child 2</button>
      </div>
  );
}

export default ChildComponent;
