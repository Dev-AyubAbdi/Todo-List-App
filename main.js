const TodoForm = document.querySelector("#todo-Form");
const TodoInput = document.querySelector("#Todo-Input");
const todoList = document.querySelector(".Todo-Lists");

TodoForm.addEventListener("submit", addTaks);

document.addEventListener("DOMContentLoaded", loadTask);

function loadTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.forEach((task) => {
    addToDom(task);
  });
}

function addTaks(event) {
  event.preventDefault();

  const tasks = TodoInput.value.trim();

  if (tasks !== " ") {
    const task = {
      Id: Date.now(),
      text: tasks,
      completed: false,
    };

    addToDom(task);
    TodoInput.value = "";
    addLocalStorage(task);
  }
}

function addToDom(task) {
  const li = document.createElement("li");
  li.className = "todo-Items";
  li.dataset.id = task.id;

  li.innerHTML = `   <input type="checkbox" class="checkbox">
                <span class="task">${task.text}</span>
                <button class="Edite-Btn">Edite</button>
                <button class="Delete-Btn">Delete</button>
            `;

  todoList.appendChild(li);

  attachEventLisentener(li, task);
}

function attachEventLisentener(li, task) {
  const DeleteBtn = li.querySelector(".Delete-Btn");
  const EditeBtn = li.querySelector(".Edite-Btn")

  DeleteBtn.addEventListener("click", function () {
    handleDelete(task.id, li);
  });

  EditeBtn.addEventListener('click', function() {
    handleEdite(task, li)
  })
}

function handleDelete(id, li) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || []

  tasks = tasks.filter((task) => task.id != id);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  li.remove();
}

function handleEdite(task, li) {
    const textTask = li.querySelector('.task')
    const NewTaskText = prompt(`Edite You're Task`, textTask.textContent)

    if(NewTaskText !== null && NewTaskText.trim() !== " ")  {
        task.text;
            textTask.textContent = NewTaskText
    }

    updateLocalStorage(task.id, NewTaskText)
}

function updateLocalStorage(id, NewTaskText) {
    const  tasks = JSON.parse(localStorage.getItem("tasks")) || []

    const task = tasks.find((task) => task.id == id) 

    if(task) {
        tasks.text = NewTaskText

        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

function addLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
