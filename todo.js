const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  
  const span = document.createElement("span");
  span.textContent = task;
  
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
addBtn.addEventListener("click", createTask);

function createTask() {
    const taskText = taskInput.value.trim();

    // Validation
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Button container
    const buttonContainer = document.createElement("div");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add buttons to container
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    // Add everything to list item
    li.appendChild(taskSpan);
    li.appendChild(buttonContainer);

    // Add task to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Return focus to input
    taskInput.focus();
}

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        createTask();
    }
});