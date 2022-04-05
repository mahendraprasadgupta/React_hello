import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
      this.state = {
         first:''
      }
      console.log('ConstructorB');
    }

    static getDerivedStateFromProps(props, state) {
       
        console.log('getDerivedStateFromPropsB');
        return null; // No change to state
    }

    componentDidMount(){
        console.log('componentDidMountB');
      }

  render() {
    console.log('RenderB');
    return (
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleB