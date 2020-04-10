import React from 'react';
import Chat from '../../components/Chat';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const HomePage = (props) => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Chat/>
    </>
  );
};

export default HomePage;