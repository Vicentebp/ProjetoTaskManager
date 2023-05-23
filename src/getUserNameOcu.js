ready(() => {
  const user = getUser();
  document.getElementById("profileName").innerText += `${user.name}`;
  document.getElementById("profileOcu").innerText += `${user.occupation}`;
});
