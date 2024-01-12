import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteTaskAction, toggleTaskAction, setPriorityFilter, setStatusFilter } from '../store/action/taskAction';
import { selectFilteredTasks } from '../store/selector/taskSelector';

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTaskAction(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTaskAction(taskId));
  };

  const handlePriorityFilterChange = (e) => {
    dispatch(setPriorityFilter(e.target.value));
  };

  const handleStatusFilterChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className='max-w-2xl mx-auto my-10 p-6 bg-white rounded shadow'>
      <h3 className='text-lg font-bold text-gray-700 mb-4'>Liste des tâches</h3>

      <div className='mb-4'>
        <span className='mr-2'>Filtrer par Priorité:</span> 
        <select 
          onChange={handlePriorityFilterChange}
          className='px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
        >
          <option value="">Toutes</option>
          <option value="Classique">Classique</option>
          <option value="Important">Important</option>
          <option value="Urgent">Urgent</option>
          <option value="Très urgent">Très urgent</option>
        </select>
      </div>

      <div className='mb-4'>
        <span className='mr-2'>Filtrer par État:</span> 
        <select 
          onChange={handleStatusFilterChange}
          className='px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
        >
          <option value="">Tous</option>
          <option value="completed">Terminée</option>
          <option value="incomplete">En cours</option>
        </select>
      </div>

      <ul className='space-y-2'>
        {tasks.map((task) => (
          <li key={task.id} className={`p-4 bg-gray-100 rounded ${task.completed ? 'line-through text-gray-500' : ''}`}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Priorité : {task.priority}</p>
            <div className='flex space-x-2 mt-2'>
              <NavLink 
                to={`/${task.id}`}
                className='text-blue-600 hover:text-blue-800'
              >Modifier</NavLink>
              <button 
                onClick={() => handleDelete(task.id)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'
              >Supprimer</button>
              <button 
                onClick={() => handleToggle(task.id)}
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded'
              >
                {task.completed ? 'Démarquer' : 'Valider'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
