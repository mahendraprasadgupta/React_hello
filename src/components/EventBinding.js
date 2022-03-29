import React, { Component } from "react";

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         msg : "Hello how are you..?"
      }

      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            msg : "Have a nice day."
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <div>EventBinding</div>
        <h5>{this.state.msg}</h5>
        {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBinding;
