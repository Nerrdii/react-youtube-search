import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <div className="row">
      <div className="col-md-4">
        <ul className="list-group">{videoItems}</ul>
      </div>
    </div>
  );
};

export default VideoList;
