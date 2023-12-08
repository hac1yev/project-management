import React, { useMemo } from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AllTasks = () => {
    const { projectId } = useParams();
    const projects = useSelector(state => state.projectReducer.projects);

    const defaultProject = useSelector(state => state.projectReducer.selectedProject);

    let selectedTask = useMemo(() => {
      return projects.find(item => item.id === projectId);
    }, [projects, projectId]);

  return (
    <ul className='all-tasks mt-4'>
        {!selectedTask ? defaultProject.tasks.map((task) => <TaskItem key={task.id} id={task.id} title={task.title} />) : selectedTask.tasks.map((task) => <TaskItem key={task.id} id={task.id} title={task.title} />)}
    </ul>
  );
};

export default AllTasks;