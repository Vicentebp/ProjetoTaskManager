const resetInput = () => {
  document.forms.createTask.elements.taskName.value = "";
  document.forms.createTask.elements.taskDate.value = undefined;
  document.forms.createTask.elements.taskStart.value = undefined;
  document.forms.createTask.elements.taskFinish.value = undefined;
  document.forms.createTask.elements.taskDesc.value = "";
  document.querySelector('input[name="taskType"]:checked').checked = false;
};
