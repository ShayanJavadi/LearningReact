import React, { Component } from 'react';

class SearchBar extends Component {
  //called when class is instantiated
  constructor(props) {
    //super is used to call parent class' functions
    super(props);
    //instantiating our state variables
    //only time we change state like this
    this.state = { term: '' };
  }

  //must have this method and return some jsx
  render() {
    //events give an event object
    return (
      <div>
        <div className="search-bar">
          <input
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.searchTerm(event.target.value)} />
        // <button onClick={() => this.searchTerm(this.state.term)} type="button" name="button">Search</button>
        </div>
      </div>
    );
  }

  searchTerm(term) {
    this.setState({term});
    this.props.searchTermChange(term);
  }
}

export default SearchBar;
