const getPastTimeLabel = (date, dayDependent = false) => {
  const now = new Date();

  const dateIso = date.toISOString();
  const nowIso = now.toISOString();
  const sameDay = dateIso.substring(0, 10) === nowIso.substring(0, 10);

  const mDiff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
  const hDiff = Math.floor(mDiff / 60);

  if (hDiff >= 24 || (dayDependent && !sameDay)) return dateIso.substring(11, 16);
  if (hDiff >= 2) return `${hDiff} hours ago`;
  if (hDiff >= 1) return "1 hour ago";
  if (mDiff >= 2) return `${mDiff} minutes ago`;
  return "1 minute ago";
};

const breakTask = (task) => {
  const startTask = {
    name: task.name,
    date: task.startDate,
    type: "start",
  };
  const endTask = {
    name: task.name,
    date: task.finalDate,
    type: "end",
  };
  return [startTask, endTask];
};

const mapTasks = () => {
  const userTasks = getUserTasks();
  const mappedTasks = userTasks.reduce((acc, cur) => {
    const brokenTasks = breakTask(cur);
    acc.push(brokenTasks[0]);
    acc.push(brokenTasks[1]);
    return acc;
  }, []);
  mappedTasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return mappedTasks;
};

ready(() => {
  const user = getUser();
  const mappedTasks = mapTasks();

  const today = new Date();
  const taskDays = mappedTasks.reduce((acc, cur) => {
    const taskDate = cur.date.substring(0, 10);
    const dayInfo = acc.find((day) => day.date.substring(0, 10) === taskDate);
    if (!dayInfo) {
      const today = {
        date: taskDate,
        objDate: new Date(taskDate),
        label: taskDate,
        list: [],
      };
      acc.push(today);
      today.list.push(cur);
    } else dayInfo.list.push(cur);
    return acc;
  }, []);

  const filteredTaskDays = taskDays.filter((item) => item.objDate <= today);
  filteredTaskDays.sort((a, b) => b.objDate - a.objDate);
  filteredTaskDays.forEach((item) => {
    const label = document.createElement("span");
    label.classList.add("notificationLabel");
    label.innerText = item.label;
    document.getElementById("notifications").append(label);
    item.list.forEach((task) => {
      const div = document.createElement("div");

      div.classList.add("notificationsBox");
      const timeSpan = document.createElement("span");
      const nameSpan = document.createElement("span");
      timeSpan.classList.add("notificationsTimeTxt");
      nameSpan.classList.add("notificationsNameTxt");
      nameSpan.innerHTML = task.type === "start" ? `${user.name}, your <b>${task.name}</b> should start right now.` : `Congrats, your <b>${task.name}</b> is now completed.`;
      timeSpan.innerText = getPastTimeLabel(new Date(task.date));
      div.append(timeSpan);
      div.append(nameSpan);
      document.getElementById("notifications").append(div);
    });
  });
});
