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

  //Event listener dos botões
  document.getElementsByClassName("carouselBtn")[3].checked = "on";
  document.getElementById("toDo").checked = "on";
  let taskDate = new Date();
  let taskStatus = "To do";
  showTasks(taskDate, taskStatus);
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
});
