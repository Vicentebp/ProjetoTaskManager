const getUserTasks = () => {
  const user = getUser(localStorage.getItem("auth"));
  const taskArray = JSON.parse(localStorage.getItem("tasks"));
  const userTasks = taskArray.filter((item) => item.userId === user.email);
  return userTasks;
};
