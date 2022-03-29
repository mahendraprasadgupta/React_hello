import React, { Component } from "react";

export class ClassClick extends Component {
    clickHandler(){

        console.log("Button Clicked In class");

    }


  render() {
    return (
      <div>
        <div>ClassClick</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
