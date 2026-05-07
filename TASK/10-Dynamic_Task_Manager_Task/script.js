
// get task from local storage or initialize empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// required variable

let editIndex = null;
let dragTaskId = null;

// dom elements

const modal = document.getElementById("modal");

const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const priorityInput = document.getElementById("priority");
const statusInput = document.getElementById("status");

const searchInput = document.getElementById("search");
const filterInput = document.getElementById("filter");

const todoColumn = document.getElementById("todo");
const progressColumn = document.getElementById("progress");
const doneColumn = document.getElementById("done");

// mobile menu toggle

function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("show");
}

// open model for new task or edit task

function openModal(index = null) {

  modal.style.display = "flex";

  // Edit Task

  if (index !== null) {

    editIndex = index;

    const task = tasks[index];

    titleInput.value = task.title;
    descInput.value = task.desc;
    priorityInput.value = task.priority;
    statusInput.value = task.status;

  }

  // New Task

  else {

    editIndex = null;

    titleInput.value = "";
    descInput.value = "";
    priorityInput.value = "Medium";
    statusInput.value = "todo";

  }

}

// cose model

function closeModal() {

  modal.style.display = "none";

}

// save task

function saveTask() {

  // Validation

  if (!titleInput.value.trim()) {

    alert("Please enter task title");
    return;

  }

  // Task Object

  const task = {

    id: Date.now(),

    title: titleInput.value.trim(),

    desc: descInput.value.trim(),

    priority: priorityInput.value,

    status: statusInput.value,

    date: new Date().toLocaleDateString()

  };

  // Edit Existing Task

  if (editIndex !== null) {

    tasks[editIndex] = task;

  }

  // Add New Task

  else {

    tasks.push(task);

  }

  // Save Local Storage

  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Close Modal

  closeModal();

  // Re-render

  renderTasks();

}

// delete task

function deleteTask(id) {

  const confirmDelete = confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  const secondConfirm = confirm(
    "This action cannot be undone!"
  );

  if (!secondConfirm) return;

  tasks = tasks.filter(task => task.id !== id);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

}

/

function renderTasks() {

  // Clear Columns

  todoColumn.innerHTML = `
    <div class="column-header">
      <h2>To Do</h2>
      <span class="task-count">0</span>
    </div>
  `;

  progressColumn.innerHTML = `
    <div class="column-header">
      <h2>In Progress</h2>
      <span class="task-count">0</span>
    </div>
  `;

  doneColumn.innerHTML = `
    <div class="column-header">
      <h2>Completed</h2>
      <span class="task-count">0</span>
    </div>
  `;

  // Search + Filter

  const searchValue = searchInput.value.toLowerCase();

  const filterValue = filterInput.value;

  // Counters

  let todoCount = 0;
  let progressCount = 0;
  let doneCount = 0;

  // Loop Tasks

  tasks.forEach((task, index) => {

    // Search Logic

    const matchSearch =
      task.title.toLowerCase().includes(searchValue) ||
      task.desc.toLowerCase().includes(searchValue);

    // Filter Logic

    const matchFilter =
      filterValue === "" ||
      task.priority === filterValue;

    if (!matchSearch || !matchFilter) return;

    // Create Card

    const card = document.createElement("div");

    card.className = "card";

    card.draggable = true;

    // Card HTML

    card.innerHTML = `

      <span class="tag ${task.priority.toLowerCase()}">
        ${task.priority}
      </span>

      <h4>${task.title}</h4>

      <p>
        ${task.desc || "No description available"}
      </p>

      <small>
        Created : ${task.date}
      </small>

      <div class="card-buttons">

        <button
          class="edit-btn"
          onclick="openModal(${index})">
          Edit
        </button>

        <button
          class="delete-btn"
          onclick="deleteTask(${task.id})">
          Delete
        </button>

      </div>

    `;

    
    card.addEventListener("dragstart", () => {

      dragTaskId = task.id;

    });

   

    if (task.status === "todo") {

      todoColumn.appendChild(card);

      todoCount++;

    }

    else if (task.status === "progress") {

      progressColumn.appendChild(card);

      progressCount++;

    }

    else if (task.status === "done") {

      doneColumn.appendChild(card);

      doneCount++;

    }

  });

  // update counts

  document.querySelector("#todo .task-count").innerText = todoCount;

  document.querySelector("#progress .task-count").innerText = progressCount;

  document.querySelector("#done .task-count").innerText = doneCount;

  // update total counts

  document.getElementById("totalTasks").innerText = tasks.length;

  document.getElementById("progressTasks").innerText = progressCount;

  document.getElementById("doneTasks").innerText = doneCount;

  // save in local storage 

  localStorage.setItem("tasks", JSON.stringify(tasks));

}



document.querySelectorAll(".column").forEach(column => {

  // Drag Over

  column.addEventListener("dragover", (e) => {

    e.preventDefault();

    column.classList.add("drag-over");

  });

  // Drag Leave

  column.addEventListener("dragleave", () => {

    column.classList.remove("drag-over");

  });

  // Drop

  column.addEventListener("drop", () => {

    column.classList.remove("drag-over");

    const task = tasks.find(t => t.id === dragTaskId);

    if (task) {

      task.status = column.id;

      renderTasks();

    }

  });

});

// search tasks

searchInput.addEventListener("input", renderTasks);

// filter tasks

filterInput.addEventListener("change", renderTasks);

// close model outside click

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    closeModal();

  }

});

// render tasks on page load

renderTasks();