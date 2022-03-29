import React,{ Component } from "react";

class Subscribe extends Component{

    constructor(){
        super();
        this.state ={
            displayString : "Welcome Visitors"
        }
    }

    changeMessage(){
        this.setState({
            displayString : 'Thank you for Subscribing'

        })
    }

    render(){

      return <div>
        <h1>{this.state.displayString}</h1>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div> 
    }

}

export default Subscribe