import React from 'react';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;