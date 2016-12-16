import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const VideoItems = props.videos.map((Video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={Video.etag}
        Video={Video} />);
  });
  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;
