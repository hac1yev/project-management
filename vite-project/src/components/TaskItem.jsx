import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux';
import { projectSliceAction } from '../store/project-slice';
import { useParams } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";

const TaskItem = ({ title, id }) => {
  const [newTaskTitle,setNewTaskTitle] = useState("");
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const handleClick = () => {
    dispatch(projectSliceAction.removeTask({
      id: id,
      projectId: projectId
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    dispatch(projectSliceAction.editTask({
      id: id,
      projectId: projectId,
      newTitle: newTaskTitle
    }));
  };

  const handleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  return (
    <li>
        <span>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button className='task-item-button' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
            <MdEdit />
          </button>
          <button className='task-item-button' onClick={handleClick}>
            <MdDelete />
          </button>
        </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <form class="modal-content" onSubmit={handleEditSubmit}>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">New task title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter new task title!' />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn" data-bs-dismiss="modal" style={{ backgroundColor: '#121716', color: '#fff' }}>Save changes</button>
                </div>
              </form>
            </div>
          </div>
    </li>
  )
}

export default memo(TaskItem);