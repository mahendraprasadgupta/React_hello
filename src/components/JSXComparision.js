import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>JSX Code vs JS Code</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello" },
    React.createElement("h1", null, "hello Mahendra Prasad Gupta")
  );
};

export default Hello;
