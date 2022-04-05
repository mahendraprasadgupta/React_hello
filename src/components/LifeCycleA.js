import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
      this.state = {
         first:''
      }
      console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
       
        console.log('getDerivedStateFromPropsA');
        return null; // No change to state
    }

    componentDidMount(){
        console.log('componentDidMount');
      }

  render() {
    console.log('RenderA');
    return (
      <div>LifeCycleA
      <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA