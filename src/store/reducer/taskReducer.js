import {
  ADD_TASK,
  DELETE_TASK,
  SET_PRIORITY_FILTER,
  SET_STATUS_FILTER,
  SET_TASK,
  TOGGLE_TASK,
  UPDATE_TASK,
} from "../action/taskAction";

const initialState = {
  task: {
    title: "",
    description: "",
    priority: "Classique",
    id: "",
  },
  tasks: [],
  message: "",
  completed: false,
};

const tastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        task: {
          ...state.task,
          [action.payload.name]: action.payload.value,
        },
      };

    case ADD_TASK:
      const newTask = action.payload;
      if (newTask.title.trim() === "") {
        return {
          ...state,
          message: "Merci de compléter le champ Titre",
        };
      }
      return {
        ...state,
        task: {
          title: "",
          description: "",
          priority: "",
          id: "",
        },
        tasks: [...state.tasks, newTask],
        message: "",
      };

    case UPDATE_TASK:
      const updatedTask = action.payload;
      const updatedTasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      return {
        ...state,
        task: {
          title: "",
          description: "",
          priority: "Classique",
          id: "",
        },
        tasks: updatedTasks,
        message: "",
      };

    case DELETE_TASK:
      const taskIdToDelete = action.payload;
      const updatedTasksForDelete = state.tasks.filter(
        (task) => task.id !== taskIdToDelete
      );
      return {
        ...state,
        tasks: updatedTasksForDelete,
      };

    case TOGGLE_TASK:
      const taskIdToToggle = action.payload;
      const updatedTasksForToggle = state.tasks.map((task) =>
        task.id === taskIdToToggle
          ? { ...task, completed: !task.completed }
          : task
      );
      return {
        ...state,
        tasks: updatedTasksForToggle,
      };

    case SET_PRIORITY_FILTER:
      return {
        ...state,
        priorityFilter: action.payload,
      };

    case SET_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.payload,
      };
    default:
      return state;
  }
};

export default tastReducer;
