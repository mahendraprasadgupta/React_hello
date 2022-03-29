import React, { Component } from "react";

/*
 *    Notes
 * 
 * 1. Always make use of setState and never modify the state directly.
 * 2. Code has to be executed after the state has been updated? Place that code in the call back
 *    function which is the second argument to the setState method.
 * 3. When you have to update state on the previous state value,pass in a function as an argument instead of the regular object.
 */

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }

    increment({value}){
        this.setState({
            counter : this.state.counter+value
        },()=>{console.log("Value:"+this.state.counter)});

        console.log(this.state.counter);
    }

    incrementTest(){
        this.setState((prevState,props)=>({
            counter : prevState.counter+1
        }));

        console.log(this.state.counter);
    }

    reincrement(){
        this.incrementTest()
        this.incrementTest()
        this.incrementTest()
        this.incrementTest()
        this.incrementTest()
    }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={()=> this.increment({value : 5})}>Increment</button><br/><br/>
        <button onClick={()=> this.reincrement()}>Re-Increment</button>
      </div>
    );
  }
}

export default Counter;



