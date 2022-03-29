import React, { Component } from "react";

class Users extends Component {
  render() {
    const {name} = this.props //Props Destructing
    return (
      <div>
        <h1>Props Example  in class components</h1>
        <h5>Hello Mr. {name}.!</h5>
        {this.props.children}
      </div>
    );
  }
}

export default Users;
