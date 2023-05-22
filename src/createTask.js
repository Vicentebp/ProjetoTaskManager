ready(() => {
  const form = document.getElementById("createTask");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.taskType.value && e.target.taskStart.value < e.target.taskFinish.value) {
      const newTask = {
        name: e.target.taskName.value,
        date: e.target.taskDate.value,
        startTime: e.target.taskStart.value,
        finalTime: e.target.taskFinish.value,
        type: e.target.taskType.value,
        desc: e.target.taskDesc.value,
      };
      createTask(newTask);
    } else if (e.target.taskStart.value > e.target.taskFinish.value) alert("Start time cant be before end time");
    else alert("Category field is required");
  });

  const year = new Date().getFullYear();
  document.getElementById("taskDate").setAttribute("min", year + "-01-01");
  document.getElementById("taskDate").setAttribute("max", year + "-12-31");
});
