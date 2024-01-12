import { useDispatch, useSelector } from "react-redux";
import {
  selectTask,
  selectTaskMessage,
} from "../store/selector/taskSelector";
import { addTaskAction, setTaskAction } from "../store/action/taskAction";

const TaskForm = () => {
  const dispatch = useDispatch();
  const task = useSelector(selectTask);
  const message = useSelector(selectTaskMessage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setTaskAction({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomNumber = Math.floor(
      10000000 + Math.random() * 90000000
    ).toString();

    const newTask = {
      title: task.title,
      description: task.description,
      priority: task.priority || "Classique",
      id: randomNumber,
    };
    dispatch(addTaskAction(newTask));
  };

  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-white rounded shadow'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <h3 className='text-lg font-bold text-gray-700'>Ajouter une action</h3>
        <div className='text-red-500'>{message}</div>

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
          value={task.priority || 'Classique'}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
        >
          <option value='Classique'>Classique</option>
          <option value='Important'>Important</option>
          <option value='Urgent'>Urgent</option>
          <option value='Très urgent'>Très urgent</option>
        </select>
        <input
          type='submit'
          value='Ajouter'
          className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        />
      </form>
    </div>
  );
};

export default TaskForm;
