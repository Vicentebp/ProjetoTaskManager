ready(() => {
  const userArray = JSON.parse(localStorage.getItem("users"));
  const user = userArray.find((item) => item.email == localStorage.getItem("auth"));
  const taskArray = JSON.parse(localStorage.getItem("tasks"));
  const userTasks = taskArray.map((item) => {
    if (item.userId == user.email) return item;
  });
  const taskPercent = userTasks.length;
});
