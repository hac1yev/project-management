import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { projectSliceAction } from '../store/project-slice';
import { useParams } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";

import { toast } from 'react-toastify';

const TaskItem = ({ title, id }) => {
  const [newTaskTitle,setNewTaskTitle] = useState("");
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const handleDelete = () => {
    dispatch(projectSliceAction.removeTask({
      id: id,
      projectId: projectId
    }));
    toast.error("Task deleted!", {
      theme: "colored",
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    dispatch(projectSliceAction.editTask({
      projectId: projectId,
      newTitle: newTaskTitle
    }));
    setNewTaskTitle('');
    toast.success("Task edited!", {
      theme: "colored",
    });
  };


  const handleEdited = () => {
    dispatch(projectSliceAction.getEditId(id));
  }

  const handleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  return (
    <li>
        <span>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={handleEdited} className='task-item-button' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
            <MdEdit />
          </button>
          <button className='task-item-button' onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>

        {/* MODAL */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleEditSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New task title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input type="text" onChange={handleChange} className='form-control' placeholder='Enter new task title!' />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: '#121716', color: '#fff' }}>Save changes</button>
              </div>
            </form>
          </div>
        </div>
    </li>
  )
}

export default memo(TaskItem);