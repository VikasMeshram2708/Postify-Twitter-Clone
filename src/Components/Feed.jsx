import React from 'react';

import '../Styles/Feed.css';

import Hero from './Hero';

import Message from './Message';

const Feed = () => {
  return (
    <div className="feed">
      {/* hero component */}
      <Hero />
      {/* message component */}
      <Message />
    </div>
  );
};

export default Feed;
