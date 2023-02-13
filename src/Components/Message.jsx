import React from 'react';

import '../Styles/Message.css';

const Message = () => {
  return (
    <div className="message">
      <div className="message__userDetails">
        {/* user img */}
        <img src="https://is.gd/5MnRqq" className="message__userImg" alt="" />
        {/* text field */}
        <input
          type="text"
          placeholder="What's happening ?"
          className="message__userText"
        />
      </div>
      {/* Tweet button */}
      <div className="message__button">
        <button type="button" className="message__tweetBtn">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Message;
