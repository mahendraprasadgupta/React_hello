import React, { Component } from "react";

export class ConditionalRendering extends Component {
constructor(props) {
  super(props)

  this.state = {
     isTrue :false
  }
}

  render() {

    // IF / ELSE APPROCH

    /* if(this.state.isTrue){
        return (
            <div>
              <div>Conditional Rendering: True</div>
            </div>
          );
    }else{
        return (
            <div>
              <div>Conditional Rendering: False</div>
            </div>
          );
    } */

    // ELEMENT VARIABLE APPROCH
    /* let res ;
    if(this.state.isTrue){res = 'True'}else{res = 'False'}
       return (
        <div>
          <div>Conditional Rendering {res}</div>
        </div>
      ); */ 

    // Ternary operator APPROCH
    /* return (
        this.state.isTrue ?  <div>Conditional Rendering True</div> : <div>Conditional Rendering False</div> 
    ); */ 

     // Short circuit operator APPROCH
    return (
        this.state.isTrue && <div>Conditional Rendering True</div> 
    );  


  /*   return (
        <div>
          <div>Conditional Rendering</div>
        </div>
      ); */

    
  }
}

export default ConditionalRendering;
