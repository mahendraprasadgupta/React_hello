import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Mahendra Prasad Gupta'
    }
  }

  componentDidMount() {
   setInterval(() => {
     this.setState({
       name: 'Mahendra Prasad Gupta'
     });
   }, 2000);
  }

  render() {
    console.log("********************** Parent Component ************************");
    return (
      <React.Fragment>
        <div>Parent Component</div>
        <PureComp name={this.state.name}/>
        <RegComp name={this.state.name}/>
      </React.Fragment>
    );
  }
}

export default ParentCom;
