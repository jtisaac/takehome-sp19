import React, { Component } from 'react'
import Counter from './Counter'

class Show extends Component {
  // YOUR CODE GOES BELOW
  
  render() {
    return (
      <div>
        <h3> <Counter name={this.props.name} initCount={this.props.episodes_seen} /> </h3>
      </div>
    )
  }
}

export default Show
