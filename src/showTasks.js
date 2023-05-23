// Show tasks
const taskArray = getTaskStates();
const completedTaks = taskArray.filter((item) => item.state === "Completed");
const toDoTasks = taskArray.filter((item) => item.state === "To do");
const inProgressTasks = taskArray.filter((item) => item.state === "In progress");
const showTasks = (taskDate, taskStatus) => {
  const mappedTasks = {
    "To do": toDoTasks,
    "In progress": inProgressTasks,
    Completed: completedTaks,
  };
  const taskList = mappedTasks[taskStatus].filter((item) => new Date(item.startDate).getDate() === taskDate.getDate());
  const listElement = document.getElementById("taskList");
  listElement.innerHTML = "";
  taskList.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("defaultBox");
    div.classList.add("calendarBox");
    const startTime = item.startDate.substring(11, 16);
    const finishTime = item.finalDate.substring(11, 16);
    const typeSpan = document.createElement("span");
    const nameSpan = document.createElement("span");
    const timeSpan = document.createElement("span");
    typeSpan.classList.add("typeTxt");
    nameSpan.classList.add("nameTxt");
    timeSpan.classList.add("timeTxt");
    typeSpan.innerText = item.type;
    nameSpan.innerText = item.name;
    timeSpan.innerText = `⏱ ${startTime} - ${finishTime}`;
    div.append(typeSpan);
    div.append(nameSpan);
    div.append(timeSpan);
    listElement.append(div);
  });
};
