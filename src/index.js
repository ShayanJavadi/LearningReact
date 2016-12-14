import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBFrc6ZedAl0zioJ8zdyDsFot9jOIyagB4';
// create a new component
// produce some html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos:[] };
    //(key, search term, callback)
    YTSearch({key: API_KEY, term: 'backing track'}, (videos) => {
      //returns 5 video objects
      this.setState({ videos });
      //this is es6 for this.setState({ videos: videos });
      //when the key and the variable have the same name we can do this
      console.log(videos);
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        {
        //comments in JSX need to be wrapped in curly braces
        //passing the videos to this component from App
        //this is called passing props
        //everytime this is rerendered this will also be refreshed
        //when props are passed to a function they arrive as a function arguement
        // const VideoList = (props) => do stuff with props
        //when props are passed to a class they can be accessed from anywhere like so:
        //this.props
        }
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//Take this and put it on the page
//<app /> instance of App
ReactDOM.render(<App />, document.querySelector('.container'));
