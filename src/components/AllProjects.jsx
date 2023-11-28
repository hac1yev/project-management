import React, { memo } from 'react';
import ProjectItem from './ProjectItem';
import { useSelector } from 'react-redux';

const AllProjects = () => {
  const allProjects = useSelector(state => state.projectReducer.projects);

  return (
    <ul className='all-projects'>
      {allProjects.map((project) => <ProjectItem key={project.id} id={project.id} name={project.title} />)}
    </ul>
  );
};

export default memo(AllProjects);