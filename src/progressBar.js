ready(() => {
  var i = 0;
  const taskArray = getTaskStates();
  const taskNum = taskArray.length || 1;
  const completedTaks = taskArray.filter((item) => item.state === "Completed");
  const toDo = taskArray.filter((item) => item.state === "To do");
  const percent = ((completedTaks.length * 100) / taskNum).toFixed(1);
  console.log({ taskNum, percent });
  document.getElementById("tasksCompleted").innerText = `${percent}% completed`;
  document.getElementById("tasksToDo").innerText = `You have ${toDo.length} more tasks to do!`;

  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
});
