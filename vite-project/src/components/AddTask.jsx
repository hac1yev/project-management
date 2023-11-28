import React, { useState } from 'react';
import AllTasks from './AllTasks';
import { useDispatch, useSelector } from 'react-redux';
import { projectSliceAction } from '../store/project-slice';
import uniqid from 'uniqid';
import { useParams } from 'react-router-dom';

const AddTask = () => {
    const { projectId } = useParams();
    const projects = useSelector(state => state.projectReducer.projects);

    let findedProject = projects.find(item => item.id === projectId);

    const dispatch = useDispatch();
    const [taskRef,setTaskRef] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(taskRef !== '') {
            dispatch(projectSliceAction.addProjectTask({
                id: uniqid(),
                title: taskRef,
                projectId,
            }));
        }else{
            return;
        }

        setTaskRef("");
    };

    const handleDeleteProject = () => {
        dispatch(projectSliceAction.deleteProject(projectId));
    };

    return (
        <div className='add-task'>
            <div className='add-task-head'>
                <h1>{findedProject?.title}</h1>
                <button onClick={handleDeleteProject}>Delete</button>
            </div>
            <span>{findedProject?.date}</span>
            <p className='my-4'>{findedProject?.description}</p>
            <hr style={{ height: '2px', background: '#666' }} />
            <form className='mt-4' onSubmit={handleSubmit}>
                <h2>Tasks</h2>
                <div className='input-group'>
                    <input type="text" value={taskRef} onChange={(e) => setTaskRef(e.target.value)} className='form-control' />
                    <button className='add-task-form-button'>Add Task</button>
                </div>
            </form>
            <AllTasks />
        </div>
    );
};

export default AddTask;