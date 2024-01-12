import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTaskAction } from "../store/action/taskAction";
import { selectTasks } from "../store/selector/taskSelector";

const TaskModification = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const task = tasks.find((task) => task.id === id);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedTask = {
      ...task,
      [name]: value,
    };
    dispatch(updateTaskAction(updatedTask));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTaskAction(task));
    navigate('/')
  };

  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-white rounded shadow'>
      <h3 className='text-lg font-bold text-gray-700 mb-4'>Modifier une tâche</h3>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          name='title'
          value={task.title}
          placeholder='Titre'
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
        />
        <input
          type='text'
          name='description'
          value={task.description}
          placeholder='Description'
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
        />
        <select
          name='priority'
          value={task.priority}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
        >
          <option value='Classique'>Classique</option>
          <option value='Important'>Important</option>
          <option value='Urgent'>Urgent</option>
          <option value='Très urgent'>Très urgent</option>
        </select>
        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

export default TaskModification;
