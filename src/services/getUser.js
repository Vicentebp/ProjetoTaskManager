const getUser = (email) => {
  const userEmail = email ?? localStorage.getItem("auth");
  if (localStorage.getItem("users") == null) localStorage.setItem("users", "[]");
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  return arrUsers.find((item) => item.email === userEmail);
};
