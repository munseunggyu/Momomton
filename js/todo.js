const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-form input')
const todoList = document.querySelector('#todo-list')
let toDos = []

function savedToDos(){
  localStorage.setItem('todos',JSON.stringify(toDos))
}
function deleteToDO(e){
  const li = e.target.parentElement
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  savedToDos()
}

function paintToDo(ToDo){
  const li = document.createElement('li');
  li.id = ToDo.id
  const span = document.createElement('span')
  const button = document.createElement('button')
  span.innerText = `${ToDo.text}  `
  button.innerText = '❌'
  button.addEventListener('click',deleteToDO)
  todoList.appendChild(li)
  li.appendChild(button)
  li.appendChild(span)
}


function handleToDOSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value
  todoInput.value = ''
  const newTOdoObj = {
    id: Date.now(),
    text: newTodo
  } 
  toDos.push(newTOdoObj)
  paintToDo(newTOdoObj)
  savedToDos()
}

todoForm.addEventListener('submit',handleToDOSubmit)

const savedToDos_KEY = localStorage.getItem('todos')
if(savedToDos_KEY){
  const parsedToDos = JSON.parse(savedToDos_KEY)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}