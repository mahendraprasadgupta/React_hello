import React from "react";

function FunctionClick() {
    function clickHandler(){

        console.log("Button Clicked");

    }

  return (
    <div>
      <div>FunctionClick</div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
