function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <p onclick="toggleTask(this)">${taskText}
        </p>
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
