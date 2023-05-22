const createTask = ({ name, date, startTime, finalTime, type, desc }) => {
  const userId = localStorage.getItem("auth");

  if (localStorage.getItem("tasks") == null) localStorage.setItem("tasks", "[]");
  const arrTasks = JSON.parse(localStorage.getItem("tasks"));
  const startIso = date + "T" + startTime + ":00.000";
  const finalIso = date + "T" + finalTime + ":00.000";

  const newTask = { name, startDate: startIso, finalDate: finalIso, type, desc, state: "toDo", userId };
  arrTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
};
