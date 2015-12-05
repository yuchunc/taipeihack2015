import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
// import stuff from '../actions'
// import stuff from '../components/*'

class App extends Component {
  // NOTE this load when component is mounted
  // componentDidMount() {}

  render() {
    return(
      <h1>Hello Phoenix!</h1>
    )
  }
}

export default App
