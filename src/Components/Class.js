import React, { Component } from 'react'

export class Class extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  
  increment=()=>{
    this.setState({count:Math.floor(Math.random()*6)})
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default Class





