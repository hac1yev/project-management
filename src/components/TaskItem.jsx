import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { projectSliceAction } from '../store/project-slice';
import { useParams } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";

import { toast } from 'react-toastify';

const TaskItem = ({ title, id }) => {
  const [newTaskTitle,setNewTaskTitle] = useState("");
  const [isModalOpen,setIsModalOpen] = useState(false);
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
    toast.success("Task edited!", {
      theme: "colored",
    });
    setIsModalOpen(false);
  };

  const handleEdited = () => {
    setIsModalOpen(true);
    dispatch(projectSliceAction.getEditId(id));
    setNewTaskTitle(title);
  };

  const handleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  return (
    <li>
        <span>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={handleEdited} className='task-item-button' type='button'>
            <MdEdit />
          </button>
          <button className='task-item-button' onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>

        {/* MODAL */}
        {isModalOpen && <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <form onSubmit={handleEditSubmit} onClick={(e) => e.stopPropagation()}>
            <div className='modal-head'>
              <h5 className="modal-title">New task title</h5>
              <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
            </div>
            <div className='modal-title'>
              <input value={newTaskTitle} type="text" onChange={handleChange} className='form-control' placeholder='Enter new task title!' />
            </div>
            <div className='modal-foot'>
              <button type="button" className="btn btn-outline-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
              <button type="submit" className="btn" style={{ backgroundColor: '#121716', color: '#fff' }}>Save changes</button>
            </div>
          </form>
        </div>}
    </li>
  )
}

export default memo(TaskItem);