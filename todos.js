var listElement = document.querySelector('ul')
var addBtn = document.querySelector('button')
var inputElement = document.querySelector('input')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos(){
    listElement.innerHTML = ''
    for (todo of todos){
        var todoElement = document.createElement('li')
        todoElement.className = 'todo-item'

        var checkElement = document.createElement('input')
        checkElement.type = 'checkbox'
        checkElement.setAttribute('onclick', 'checkTodo(this)')
        
        var todoText = document.createTextNode(todo)
        
        var trashLink = document.createElement('a')
        trashLink.href = '#'

        var pos = todos.indexOf(todo)
        trashLink.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var trashIcon = document.createElement('img')
        trashIcon.src = 'assets/trash.png'
        trashIcon.alt = 'Excluir todo'

        todoElement.appendChild(checkElement)
        todoElement.appendChild(todoText)
        trashLink.appendChild(trashIcon)
        todoElement.appendChild(trashLink)
        listElement.appendChild(todoElement)

    }
}

renderTodos()

function addTodo() {
    var todoText = inputElement.value;
    if (verificaCampoVazio(todoText)) {
        todos.push(todoText)
        inputElement.value = ''
        saveToLocalStorage()
        renderTodos()
    }
}

addBtn.onclick = addTodo;

function deleteTodo(position) {
    todos.splice(position, 1)
    saveToLocalStorage()
    renderTodos()
}

function saveToLocalStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
    renderTodos()
}

function checkTodo(checkbox){
    var todoItem = checkbox.parentElement || checkbox.parentNode

    if (checkbox.checked) {
        todoItem.style.textDecoration = 'line-through'
    } else {
        todoItem.style.textDecoration = 'none'
    }
}

function verificaCampoVazio(todoText){
    todo = todoText.trim() != '' ? true : false
    if (!todo)
        alert("Todo field is empty")
    return todo
}
