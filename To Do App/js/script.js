function addTask() {
  const input = document.getElementById("taskInput");
  const inputTime = document.getElementById("toDoTime");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <p >${taskText}</p>
        <p >${inputTime.value}</p>
        <span class="delete" onclick="deleteTask(this)">×</span>
      `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(elem) {
  elem.parentElement.remove();
}

function toggleTask(elem) {
  elem.classList.toggle("checked");
}
