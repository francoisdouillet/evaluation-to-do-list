export const selectTask = (state) => state.task.task
export const selectTasks = (state) => state.task.tasks
export const selectTaskMessage = (state) => state.task.message

export const selectFilteredTasks = (state) => {
    const { tasks, priorityFilter, statusFilter } = state.task;
  
    return tasks.filter(task => {
      const matchesPriority = priorityFilter ? task.priority === priorityFilter : true;
      let matchesStatus = true;
  
      if (statusFilter) {
        const isCompleted = task.completed === true;
        const isIncomplete = task.completed === false || task.completed === undefined;
  
        if (statusFilter === 'completed') {
          matchesStatus = isCompleted;
        } else if (statusFilter === 'incomplete') {
          matchesStatus = isIncomplete;
        }
      }
  
      return matchesPriority && matchesStatus;
    });
  };