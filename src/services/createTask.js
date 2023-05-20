const createTask = ({ name, date, startTime, finalTime, type, desc }) => {
  const userId = localStorage.getItem("auth");

  if (localStorage.getItem("tasks") == null) localStorage.setItem("tasks", "[]");
  const arrTasks = JSON.parse(localStorage.getItem("tasks"));
  const newTask = { name, date, startTime, finalTime, type, desc, userId };
  arrTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
};
