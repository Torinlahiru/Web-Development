function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <span class="delete" onclick="deleteTask(this)">×</span>
      `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
