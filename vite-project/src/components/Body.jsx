import React from 'react';
import NoProject from './NoProject';
import AddProject from './AddProject';
import AddTask from './AddTask';
import { Route, Routes } from 'react-router-dom';

const Body = () => {
  return (
    <div className='main'>
        
        <Routes>
          <Route path='/' element={<NoProject />} />
          <Route path='/add-project' element={<AddProject />} />
          <Route path='/add-project/:projectId' element={<AddTask />} />
        </Routes>
    </div>
  );
};

export default Body;