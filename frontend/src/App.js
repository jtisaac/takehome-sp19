import React, { Component } from 'react'
import Instructions from './Instructions'
import Counter from './Counter'
import Show from './Show'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [
        {id: 1, name: "Game of Thrones", episodes_seen: 0},
        {id: 2, name: "Naruto", episodes_seen: 220},
        {id: 3, name: "Black Mirror", episodes_seen: 3},
      ],
      nextId: 4
    }
  }
  addShow = (event) => {
  // thanks https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
    event.preventDefault();
    const data = new FormData(event.target);
    var name = data.get('name').toString();
    var currShows = this.state.shows;
    currShows.push({id: this.state.nextId, name: name, episodes_seen: 0});
    this.setState({ shows: currShows });
    this.setState({ nextId: this.state.nextId + 1})
  }
  render() {
    return (
      <div className="App">
        <Instructions complete={"yes"}/>
        <form onSubmit={this.addShow}>
          <label>
            New Show Name:
          </label>
          <input type="text" name="name" ref={(input) => this.textInput = input} />
          <button>Submit</button>
        </form>
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
      </div>
    )
  }
}

export default App
