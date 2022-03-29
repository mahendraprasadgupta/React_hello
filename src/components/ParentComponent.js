import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     msg: 'Parent Component'
  }

  this.clickHandeler = this.clickHandeler.bind(this);
}

clickHandeler(childName){

    alert(`Parent msg:${this.state.msg} from ${childName}`)

    /* this.setState({
        msg: 'parent change'
    }) */

}

  render() {
    return (
      <div>
       <ChildComponent greetHandeler={this.clickHandeler}/>
      </div>
    );
  }
}

export default ParentComponent;
