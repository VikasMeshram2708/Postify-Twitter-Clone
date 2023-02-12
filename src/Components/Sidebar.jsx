import React from 'react';

import '../Styles/Sidebar.css';

import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome';

import { FaHashtag } from '@react-icons/all-files/fa/FaHashtag';

import { IoIosNotifications } from '@react-icons/all-files/io/IoIosNotifications';

import { AiTwotoneMessage } from '@react-icons/all-files/ai/AiTwotoneMessage';

import { BsFillBookmarkFill } from '@react-icons/all-files/bs/BsFillBookmarkFill';

import { GoVerified } from '@react-icons/all-files/go/GoVerified';

import { CgProfile } from '@react-icons/all-files/cg/CgProfile';

import { CgMoreO } from '@react-icons/all-files/cg/CgMoreO';

import { FaSeedling } from '@react-icons/all-files/fa/FaSeedling';

import { Link } from 'react-router-dom';

import { IoLogoTwitter } from "@react-icons/all-files/io/IoLogoTwitter";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>

      <Link to="/home" className="sidebar__links">
          <IoLogoTwitter size={30} />
        </Link>

        <Link to="/home" className="sidebar__links">
          <AiFillHome size={25} />
          <div className="sidebar__linkChild">
            <label htmlFor="sidebarLinkName">Home</label>
          </div>
        </Link>

        <Link to="/explore" className="sidebar__links">
          <FaHashtag size={25} /> Explore
        </Link>

        <Link to="/notifications" className="sidebar__links">
          <IoIosNotifications size={25} /> Notification
        </Link>

        <Link to="/messages" className="sidebar__links">
          <AiTwotoneMessage size={25} /> Messages
        </Link>

        <Link to="/bookmarks" className="sidebar__links">
          <BsFillBookmarkFill size={25} /> Bookmarks
        </Link>

        <Link to="/twitterBlue" className="sidebar__links">
          <GoVerified size={25} /> Twitter Blue
        </Link>

        <Link to="/profile" className="sidebar__links">
          <CgProfile size={25} /> Profile
        </Link>

        <Link to="/more" className="sidebar__links">
          <CgMoreO size={25} /> More
        </Link>

        {/* Tweet Button */}
        <button type="button" className="sidebar__links sidebar__button">
          <FaSeedling size={25} /> Tweet
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
