ready(() => {
  const form = document.getElementById("createTask");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.taskType.value) {
      const newTask = {
        name: e.target.taskName.value,
        date: e.target.taskDate.value,
        startTime: e.target.taskStart.value,
        finalTime: e.target.taskFinish.value,
        type: e.target.taskType.value,
        desc: e.target.taskDesc.value,
      };
      createTask(newTask);
    } else alert("Category field is required");
  });
});
