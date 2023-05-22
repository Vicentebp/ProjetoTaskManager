ready(() => {
  const user = getUser(localStorage.getItem("auth"));
  const taskArray = JSON.parse(localStorage.getItem("tasks"));
});
