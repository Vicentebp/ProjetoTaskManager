const getTaskStates = () => {
  const userTasks = getUserTasks();
  const newState = userTasks.map((item) => {
    const now = new Date();
    let state = "To do";
    if (now > new Date(item.finalDate)) {
      state = "Completed";
    } else if (now > new Date(item.startDate)) {
      state = "In progress";
    }
    return {
      ...item,
      state,
    };
  });
  return newState;
};
