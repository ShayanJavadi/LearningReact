import React from 'react';

const VideoDetail = ({Video}) => {
  if (!Video) {
    return <div>Loading...</div>;
  }
  const videoId = Video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{Video.snippet.title}</div>
        <div>{Video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
