import React, { Component } from 'react'
class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
        count: this.props.initCount,
        name: this.props.name
    };
  }
  incrementClicks = () => {
    this.setState({ count: this.state.count + 1 });
  }
  decrementClicks = () => {
    this.setState({ count: this.state.count - 1  });
  }

  render() {
    return (
      <div>
        <h>{this.state.name} {this.state.count}</h>
        <button onClick={this.incrementClicks}>Increment</button>
        <button onClick={this.decrementClicks}>Decrement</button>
      </div>
    )
  }
}

export default Counter
