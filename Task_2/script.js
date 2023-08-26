let input = document.querySelector('.input-text')
let add = document.querySelector('.add')
let tasksContainer = document.querySelector('.tasks')

let tasksList = []

add.addEventListener('click', function () {
  console.log(input.value)
  if (input.value !== '') {
    addToList(input.value)
    input.value = ''
  }
})

function addToList(value) {
  let task = {
    id: Date.now(),
    content: value,
    completed: false,
  }
  tasksList.push(task)
  addToPage(tasksList)
}

function addToPage(arr) {
  tasksContainer.innerHTML = ''
  arr.forEach((task) => {
    let div = document.createElement('div')
    div.className = 'task'
    if (task.completed) {
      div.className = 'done task'
    }
    let taskTextDiv = document.createElement('div')
    taskTextDiv.setAttribute('data-id', task.id)
    taskTextDiv.className = 'task-text'
    taskTextDiv.appendChild(document.createTextNode(task.content))
    div.appendChild(taskTextDiv)
    let delSpan = document.createElement('span')
    delSpan.className = 'delete'
    delSpan.appendChild(document.createTextNode('Delete'))
    div.appendChild(delSpan)

    tasksContainer.appendChild(div)
  })
}
