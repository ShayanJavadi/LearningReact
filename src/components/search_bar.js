import React, { Component } from 'react';

class SearchBar extends Component {
  //called when class is instantiated
  constructor(props) {
    //super is used to call parent class' functions
    super(props);
    //instantiating our state variables
    //only time we change state like this
    this.state = { term: 'Starting value' };
  }

  //must have this method and return some jsx
  render() {
    //events give an event object
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
