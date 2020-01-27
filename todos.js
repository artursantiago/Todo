var listElement = document.querySelector('#app ul')
var plusElement = document.querySelector('#app a')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos(){
    listElement = []
    for (todo in todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)

    }
}

function saveToLocalStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}