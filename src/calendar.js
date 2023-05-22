ready(() => {
  // carousel
  const date = new Date();
  date.setDate(date.getDate() - 3);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 0; i <= 10; i++) {
    currentDate = new Date(date);
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = "carousel";
    input.style = "display:none;";
    input.classList.add("carouselBtn");
    input.value = currentDate;
    input.id = currentDate.getDate();
    document.getElementById("carousel").append(input);
    label.setAttribute("for", input.id);
    label.classList.add("card");
    label.innerText = `${month[currentDate.getMonth()]} \n ${currentDate.getDate()}`;
    document.getElementById("carousel").append(label);
    date.setDate(date.getDate() + 1);
  }
  // array de tasks
  const taskArray = getTaskStates();
  const completedTaks = taskArray.filter((item) => item.state === "Completed");
  const toDoTasks = taskArray.filter((item) => item.state === "To do");
  const inProgressTasks = taskArray.filter((item) => item.state === "In progress");

  //Event listener dos botões
  let taskDate = new Date();
  let taskStatus = "To do";
  const carouselArray = document.getElementsByName("carousel");
  for (let i = 0; i < carouselArray.length; i++) {
    carouselArray[i].addEventListener("change", (e) => {
      e.preventDefault();
      taskDate = new Date(carouselArray[i].value);
      showTasks(taskDate, taskStatus);
    });
  }
  const statusArray = document.getElementsByName("statusBtn");
  for (let i = 0; i < 3; i++) {
    statusArray[i].addEventListener("change", (e) => {
      e.preventDefault();
      taskStatus = statusArray[i].value;
      showTasks(taskDate, taskStatus);
    });
  }
  // função checktask

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
      div.style = "width: 286px; height: 77px;";
      const startTime = item.startDate.substring(11, 16);
      const finishTime = item.finalDate.substring(11, 16);
      div.innerText = `${item.type}\n${item.name}\n⏱ ${startTime} - ${finishTime}`;
      listElement.append(div);
    });
  };
});
