import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
    console.log(this.state.username);
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
    console.log(this.state.address);
  };
  

  handleCarsChange = (e) => {
    this.setState({
      car: e.target.value,
    });
    console.log(this.state.car);
  };

  handleSubmitChange = (e) => {
      //console.log('Mahi');
    e.preventDefault();
    alert(`${this.state.username}${this.state.address} ${this.state.car}`);
  };

  render() {
      const {username,address,car} = this.state
    return (
      <form onSubmit={this.handleSubmitChange}>
        <div>Form Component</div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>

        <div>
          <label>Address</label>
          <textarea
            value={address}
            onChange={this.handleAddressChange}
          ></textarea>
        </div>

        <div>
          <select value={car} onChange={this.handleCarsChange}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <button type="submit" >submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
