import React, { Component } from 'react'

export class Lifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"welcome",
       value:"guys"
    }
  }
  componentWillMount(){
    alert("this is the page")
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}{this.state.value}</h2>
        <button onClick={this.clicks}>change</button>
        <button onClick={this.clicked}>changes</button>
      </div>
    )
  }
  clicks=()=>{
    this.setState({name:"Thank you guys"})
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        name:"rect lifecycle "
      })
    },5000)
  }
  componentWillUpdate(){
    alert("are you eilling to update")
  }
 
  shouldComponentUpdate(){
    return true
  }
  clicked=()=>{
    this.setState({name:false,value:false})
  }
  componentWillUnmount(){
   console.log("the component is removed")
  }
}

export default Lifecycle


