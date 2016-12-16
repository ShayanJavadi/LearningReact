import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBFrc6ZedAl0zioJ8zdyDsFot9jOIyagB4';
// create a new component
// produce some html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null,
      searchTerm: null
     };
    //(key, search term, callback)
    this.videoSearch('  ');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      //returns 5 video objects
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
        });
      console.log(videos);
    });
  }
  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar
          searchTermChange={videoSearch}
          />
        <VideoDetail Video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
//Take this and put it on the page
//<app /> instance of App
ReactDOM.render(<App />, document.querySelector('.container'));
