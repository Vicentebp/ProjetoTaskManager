ready(() => {
  const form = document.getElementById("register");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      createUser(newUser);
      document.location.href = "login.html";
    } catch (error) {
      alert(error);
    }
  });
});
