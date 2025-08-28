const TodoForm = document.querySelector('#todo-Form');
const TodoInput = document.querySelector('#Todo-Input');
const todoList = document.querySelector('.Todo-Lists');

TodoForm.addEventListener('submit', addTaks)

function addTaks(event) {
    event.preventDefault()

    const tasks = TodoInput.value.trim()

    if(tasks !== " ") {
        const task = {
            Id: Date.now(),
            text: tasks,
            completed: false

        }

        addToDom(task)
        TodoInput.value = ""
        addTolocalStorage(task)
    }
}

function addToDom(task) {
    const li = document.createElement('li')
    li.className = "todo-Items"
    li.dataset.id = task.id

    li.innerHTML = 
         `   <input type="checkbox" class="checkbox">
                <span class="task">${task.text}</span>
                <button class="Edite-Btn">Edite</button>
                <button class="Delete-Btn">Delete</button>
            `

      todoList.appendChild(li)


}

function addTolocalStorage(task) {


    localStorage.setItem('tasks', JSON.stringify(task))
}