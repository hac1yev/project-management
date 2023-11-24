import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { projectSliceAction } from '../store/project-slice';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const AddProject = () => {
    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(titleRef.current.value !== '' && descriptionRef.current.value !== '' && dateRef.current.value !== ''){
            dispatch(projectSliceAction.getProject({
                id: uniqid(),
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                date: dateRef.current.value,
                tasks: [],
            }));
        }else{
            return;
        }

        titleRef.current.value = '';
        descriptionRef.current.value = '';
        dateRef.current.value = '';
    };  

    return (
        <form className='add-project' onSubmit={handleSubmit}>
            <div className='add-project-buttons'>
                <Link to="/" className='add-project-cancel'>Cancel</Link>
                <button className='add-project-save'>Save</button>
            </div>
            <div>
                <label htmlFor="title">TITLE</label>
                <input type="text" ref={titleRef} className='form-control' id='title' />
            </div>
            <div className='mt-3'>
                <label htmlFor="title">DESCRIPTION</label>
                <textarea  id="title" ref={descriptionRef} className='form-control' rows="4"></textarea>
            </div>
            <div className='mt-3'>
                <label htmlFor="title">DUE DATE</label>
                <input type="date" ref={dateRef} className='form-control' id='title' />
            </div>
        </form>
    );
};

export default AddProject;