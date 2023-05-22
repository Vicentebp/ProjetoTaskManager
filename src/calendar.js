ready(() => {
  const date = new Date();
  date.setDate(date.getDate() - 3);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 0; i <= 10; i++) {
    currentDate = new Date(date);
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = "carousel";
    input.style = "display:none;";
    input.classList.add("carouselBtn");
    input.value = currentDate;
    input.id = currentDate.getDate();
    document.getElementById("carousel").append(input);
    label.setAttribute("for", input.id);
    label.classList.add("card");
    label.innerText = `${month[currentDate.getMonth()]} \n ${currentDate.getDate()}`;
    document.getElementById("carousel").append(label);
    date.setDate(date.getDate() + 1);
  }
});
