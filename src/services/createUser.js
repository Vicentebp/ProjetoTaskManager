const createUser = ({ name, occupation, email, password }) => {
  if (localStorage.getItem("users") == null) localStorage.setItem("users", "[]");
  if (localStorage.getItem("auth") == null) localStorage.setItem("auth", "false");
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  if (arrUsers.find((item) => item.email === email)) throw "Email already used";
  const newUser = { name, occupation, email, password };
  arrUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(arrUsers));
};
