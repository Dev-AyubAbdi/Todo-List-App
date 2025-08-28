const TodoForm = document.querySelector('#todo-Form');
const TodoInput = document.querySelector('#Todo-Input');
const todoList = document.querySelector('#Todo-Lists');

TodoForm.addEventListener('submit', addTaks)

function addTaks(event) {
    event.preventDefault()

    const tasks = TodoInput.value.trim()

    if(tasks !== " ") {
        const task = {
            Id: date.now(),
            text: tasks,
            completed: false

        }

        addToDom(task)
    }
}

function addToDom(task)