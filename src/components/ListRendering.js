import React from "react";
//import childListRendering from "./childListRendering";
import ChildListRendering from "./childListRendering";

/**
 *  List and Keys
 * ============================
 *  1. A "Key" is a special string attributes you need to include when creating lists of elements.
 *  2. Key gives the elements a stable identity.
 *  3. Keys help React identify which items have changed, are added, or are removed.
 *  4. Help in efficient update of the user interface.
 * 
 */

function ListRendering() {
  const name = ["Mahendra", "somya", "sudeepta", "mahi"];
  const person = [
    { id: 1, name: "Mahendra", age: 18, skill: "Vue" },
    { id: 2, name: "Somya", age: 19, skill: "Javascript" },
    { id: 3, name: "sudeepta", age: 20, skill: "Angular" },
    { id: 4, name: "mahi", age: 21, skill: "PHP, Node and React" },
  ];
  const nameList = name.map((name) => <h1>{name}</h1>);
  const personList = person.map((person) => <ChildListRendering key={person.id} person={person} />);
  return (
    /* <div>
      <div>{name[0]}</div>
      <div>{name[1]}</div>
      <div>{name[2]}</div>
      <div>{name[3]}</div>
    </div> */
    <div>
    {/* <div>{nameList}</div> */}
    <div>{personList}</div>
    
    
    
    
    
    
    </div>
  );
}

export default ListRendering;
