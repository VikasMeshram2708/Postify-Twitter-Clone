import React from 'react';

import '../Styles/Feed.css';

import Hero from './Hero';

import Message from './Message';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed">
      {/* hero component */}
      <Hero />
      
      {/* message component */}
      <Message />

      {/* Post Component */}
      <Post />
    </div>
  );
};

export default Feed;
