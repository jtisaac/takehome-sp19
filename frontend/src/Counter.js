import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW

  incrementClicks() {
    this.setState({ clickNumber: this.state.clicks + 1 });
  }
  decrementClicks() {}

  render() {
    return (
      <label>test</label>
    )
  }
}

export default Counter
