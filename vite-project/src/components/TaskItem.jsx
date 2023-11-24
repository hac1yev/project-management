import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { projectSliceAction } from '../store/project-slice';
import { useParams } from 'react-router-dom';

const TaskItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const handleClick = () => {
    dispatch(projectSliceAction.removeTask({
      id: id,
      projectId: projectId
    }));
  };

  return (
    <li>
        <span>{title}</span>
        <button onClick={handleClick}>Clear</button>
    </li>
  )
}

export default memo(TaskItem);