import React, { memo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const ProjectItem = ({ name, id }) => {
  const location = useLocation();

  return (
    <li className={location.pathname.includes(id) ? 'active' : ''}>
        <Link to={`/add-project/${id}`} style={{ color: '#f0f0f0', textDecoration: 'none' }}>{name}</Link>
    </li>
  );
};

export default memo(ProjectItem);