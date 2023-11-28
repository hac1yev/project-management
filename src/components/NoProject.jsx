import React from 'react';
import brief from '../assets/brief.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NoProject = () => {
    const projectCount = useSelector(state => state.projectReducer.projectCount); 

    return (
        <div className='no-project'>
            <img className="project-icon" src={brief} alt="brief" />
            <h2>{`${projectCount === 0 ? 'No Project Selected' : `There is ${projectCount} project`}`}</h2>
            <p>{`${projectCount === 0 ? 'Select a project or get started with a new one' : 'Create another project'}`}</p>
            <Link to="/add-project" >Create new project</Link>
        </div>
    );
};

export default NoProject;