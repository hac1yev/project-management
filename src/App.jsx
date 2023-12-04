import React from 'react';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className='app'>
      <Sidebar />
      <Body />
      <div style={{ position: 'absolute' }}>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default App;