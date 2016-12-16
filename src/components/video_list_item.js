import React from 'react';
//es6 pop two things off of prop object
const VideoListItem = ({Video, onVideoSelect}) => {
  // const video = props.video;
  const imageUrl = Video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(Video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{Video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
