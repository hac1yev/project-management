import React from 'react';
import AllProjects from './AllProjects';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link className='your-project' to="/">Your Projects</Link>
          <Link className='add-project-link' to="/add-project">
              + Add Project
          </Link>
        </div>
        <AllProjects />
    </div>
  );
};

export default Sidebar;