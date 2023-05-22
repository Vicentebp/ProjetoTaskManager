ready(() => {
  const userArray = JSON.parse(localStorage.getItem("users"));
  const user = userArray.find((item) => item.email == localStorage.getItem("auth"));
  document.getElementById("userName").innerText += `${user.name}`;
});
