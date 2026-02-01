// Add Task Function
function addTask() {

  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");
  var timeInput = document.getElementById("timeInput");
  var ampmInput = document.getElementById("ampmInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  var formattedDate = "";

  if (dateInput.value !== "" && timeInput.value !== "") {

    var d = dateInput.value.split("-");
    var t = timeInput.value.split(":");

    formattedDate = d[2] + "-" + d[1] + "-" + d[0] + 
                    " | " + t[0] + ":" + t[1] + " " + ampmInput.value;
  }

  var li = document.createElement("li");

  li.innerHTML = `
    <div>
      <span class="task-text">${taskInput.value}</span><br>
      <small>${formattedDate}</small>
    </div>

    <div class="buttons">
      <button class="done-btn" onclick="doneTask(this)">Done</button>
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  ampmInput.value = "AM";
}

// Delete Task
function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
}

// Done Task
function doneTask(btn) {
  var task = btn.parentElement.parentElement.querySelector(".task-text");
  task.classList.toggle("completed");
}

// Edit Task
function editTask(btn) {
  var task = btn.parentElement.parentElement.querySelector(".task-text");

  var newText = prompt("Edit Task", task.innerText);

  if (newText !== null && newText !== "") {
    task.innerText = newText;
  }
}