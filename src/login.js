ready(() => {
  const form = document.getElementById("login");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getUser(e.target.email.value);
    if (!user) alert("Email not registred");
    else if (user.password !== e.target.password.value) alert("Wrong password");
    else {
      localStorage.setItem("auth", user.email);
      document.location.href = "home.html";
    }
  });
});
