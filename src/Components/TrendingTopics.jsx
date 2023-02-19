import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/TrendingTopics.css';

const TrendingTopics = () => {
  return (
    <div className="trendingTopics">
      <div className="widget__linksContainer">
        <div className="widget__trendingTitle">
          <h3>What's happening</h3>
        </div>
        <div className="widget__trendingTopics">
          <div className="widget__trendingHeadLine">
            <label
              htmlFor="trendingTopicsName"
              className="widget__trendingTitle"
            >
              Trending
            </label>
            <h3 className="widget__linkTitle">India</h3>
          </div>
          <button type="button" className="widget__topicButton">
            ...
          </button>
        </div>

        {/* 2nd */}
        <div className="widget__trendingTopics">
          <div className="widget__trendingHeadLine">
            <label
              htmlFor="trendingTopicsName"
              className="widget__trendingTitle"
            >
              Trending
            </label>
            <h3 className="widget__linkTitle">India</h3>
          </div>
          <button type="button" className="widget__topicButton">
            ...
          </button>
        </div>

        {/* 3rd */}
        <div className="widget__trendingTopics">
          <div className="widget__trendingHeadLine">
            <label
              htmlFor="trendingTopicsName"
              className="widget__trendingTitle"
            >
              Trending
            </label>
            <h3 className="widget__linkTitle">India</h3>
          </div>
          <button type="button" className="widget__topicButton">
            ...
          </button>
        </div>

        {/* 4th */}
        <div className="widget__trendingTopics">
          <div className="widget__trendingHeadLine">
            <label
              htmlFor="trendingTopicsName"
              className="widget__trendingTitle"
            >
              Trending
            </label>
            <h3 className="widget__linkTitle">India</h3>
          </div>
          <button type="button" className="widget__topicButton">
            ...
          </button>
        </div>

        {/* 5th */}
        <div className="widget__trendingTopics">
          <div className="widget__trendingHeadLine">
            <label
              htmlFor="trendingTopicsName"
              className="widget__trendingTitle"
            >
              Trending
            </label>
            <h3 className="widget__linkTitle">India</h3>
          </div>
          <button type="button" className="widget__topicButton">
            ...
          </button>
        </div>

        {/* 6th */}
        <div className="widget__trendingTopics">
          <div className="widget__trendingHeadLine">
            <label
              htmlFor="trendingTopicsName"
              className="widget__trendingTitle"
            >
              Trending
            </label>
            <h3 className="widget__linkTitle">India</h3>
          </div>
          <button type="button" className="widget__topicButton">
            ...
          </button>
        </div>

        {/* show more button */}
        <Link to="/showmore">
          <label htmlFor="buttonTitle" className='trendingTopics__button'>show more</label>
        </Link>
      </div>
    </div>
  );
};

export default TrendingTopics;
