import React, { Component } from 'react'
import './App.css'
import PersonList from './PersonList'
export default class App extends Component {
  constructor() {
    super()
    this.state = {}

  }


  render() {
    return (
      <div className='App'>

        <PersonList numUsers={this.state.numUsers} />
      </div>
    )
  }
}
