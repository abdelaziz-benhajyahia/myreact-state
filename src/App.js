import React, { Component } from 'react'
import './App.css';
import Person from './Components/Person';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {show: false}
  }

// Function to show the component
handleClick = () => this.setState({show: !this.state.show})
  
  render() {
    return (
      <div className='App'>
        <h1>Checkpoint React State</h1>
        <button onClick={this.handleClick}>Click here to SHOW</button>
        {this.state.show ? <Person />: null}
      </div>
    )
  }
}
