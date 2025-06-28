import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div id="page">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default App;
