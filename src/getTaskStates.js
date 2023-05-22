const getTaskStates = () => {
  const userTasks = getUserTasks();
  const newState = userTasks.map((item) => {
    const now = new Date();
    if (now > new Date(item.finalDate)) {
      item.state = "Completed";
      return item.state;
    }
    if (now > new Date(item.startDate)) {
      item.state = "In progress";
      return item.state;
    }
    item.state = "To do";
    return item.state;
  });
  return newState;
};
