ready(() => {
  if (!localStorage.getItem("auth")) document.location.href = "index.html";
});
