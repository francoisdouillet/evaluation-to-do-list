export const SET_TASK = "SET_TASK";

export const setTaskAction = (payload) => {
  return {
    type: SET_TASK,
    payload,
  };
};

export const ADD_TASK = "ADD_TASK";

export const addTaskAction = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const UPDATE_TASK = "UPDATE_TASK";

export const updateTaskAction = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask,
  };
};

export const DELETE_TASK = "DELETE_TASK";

export const deleteTaskAction = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const TOGGLE_TASK = "TOGGLE_TASK";

export const toggleTaskAction = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};

export const SET_PRIORITY_FILTER = "SET_PRIORITY_FILTER"
export const SET_STATUS_FILTER = "SET_STATUS_FILTER"

export const setPriorityFilter = (priority) => {
  return {
    type: SET_PRIORITY_FILTER,
    payload: priority,
  };
};

export const setStatusFilter = (status) => {
  return {
    type: SET_STATUS_FILTER,
    payload: status,
  };
};
