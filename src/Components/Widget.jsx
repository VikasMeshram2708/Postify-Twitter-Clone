import React from 'react';

import '../Styles/Widget.css';

import TrendingTopics from './TrendingTopics';

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__searchBarContainer">
        {/* search bar */}
        <input
          type="text"
          className="widget__searchBar"
          placeholder="Search Twitter"
        />
      </div>
      <TrendingTopics />
      {/* trending container */}
      {/* line tag */}
      <hr className='widget__linkBreak' />
      {/* footer links */}
    </div>
  );
};

export default Widget;
