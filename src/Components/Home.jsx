import React from 'react';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default Home;
