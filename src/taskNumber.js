ready(() => {
  const userTasks = getUserTasks();
  const taskNum = {
    college: 0,
    work: 0,
    social: 0,
    study: 0,
    personal: 0,
    home: 0,
    total: 0,
  };
  userTasks.forEach((item) => {
    switch (item.type) {
      case "college":
        taskNum.college += 1;
        taskNum.total += 1;
        break;
      case "work":
        taskNum.work += 1;
        taskNum.total += 1;
        break;
      case "social":
        taskNum.social += 1;
        taskNum.total += 1;
        break;
      case "study":
        taskNum.study += 1;
        taskNum.total += 1;
        break;
      case "personal":
        taskNum.personal += 1;
        taskNum.total += 1;
        break;
      case "home":
        taskNum.home += 1;
        taskNum.total += 1;
        break;
    }
  });

  document.getElementById("collegeTasks").innerText = `${taskNum.college} tasks`;
  document.getElementById("workTasks").innerText = `${taskNum.work} tasks`;
  document.getElementById("socialTasks").innerText = `${taskNum.social} tasks`;
  document.getElementById("studyTasks").innerText = `${taskNum.study} tasks`;
  document.getElementById("personalTasks").innerText = `${taskNum.personal} tasks`;
  document.getElementById("homeTasks").innerText = `${taskNum.home} tasks`;

  // if (localStorage.getItem("userTasks") == null) localStorage.setItem("userTasks", "[]");
  // localStorage.setItem("userTasks", JSON.stringify(userTasks));
});
