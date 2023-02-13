import React from 'react';

import '../Styles/Post.css';

import { GoVerified } from '@react-icons/all-files/go/GoVerified';

import { AiTwotoneMessage } from '@react-icons/all-files/ai/AiTwotoneMessage';

import { FaRetweet } from '@react-icons/all-files/fa/FaRetweet';

import { BsHeartFill } from '@react-icons/all-files/bs/BsHeartFill';

import { RiBarChartFill } from '@react-icons/all-files/ri/RiBarChartFill';

import { FaShare } from '@react-icons/all-files/fa/FaShare';

const Post = () => {
  return (
    <div className="post">
      <div className="post__forUser">
        {/* user image */}
        <img src="https://is.gd/5MnRqq" className="post__userImg" alt="" />
        {/* user name with verified icon  and settings button ...*/}
        <p>Vikas Meshram</p>
        <GoVerified />
        <span>@vikas108</span>
        <button type="button" className="post__button">
          ...
        </button>
      </div>

      {/* Description */}
      <div className="post__description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          dignissimos.quis enim, consequatur commodi tenetur consectetur?
        </p>
      </div>

      {/* post img */}
      <div className="post__postedImgUri">
        <img
          src="https://is.gd/BxDJ3r"
          className="post__userPostedImg"
          alt=""
        />
      </div>

      {/* 5 links */}
      <div className="post__links">
        <AiTwotoneMessage size={22} />
        <FaRetweet size={22} />
        <BsHeartFill size={22} />
        <RiBarChartFill size={22} />
        <FaShare size={22} />
      </div>
    </div>
  );
};

export default Post;
