document.getElementById('add-task').addEventListener('click', () => {
  const inputTask = document.getElementById('input-value')
  const toDoTask = document.getElementById('list')

  const taskText = inputTask.value.trim()
  if (taskText === '') {
    alert('enter valid task')
    return
  }

  const newTask = document.createElement('li')
  const taskSpan = document.createElement('span')
  const listBtn = document.createElement('button')

  taskSpan.className = 'progress'
  taskSpan.textContent = taskText
  listBtn.textContent = 'delete'


  const list = []
  taskSpan.addEventListener('click', () => {
    newTask.classList.toggle('task completed')
  })

  newTask.appendChild(taskSpan)
  toDoTask.appendChild(newTask)
  taskSpan.appendChild(listBtn)
  list.appendChild(newTask)

  listBtn.addEventListener('click', () => {
    list.removeChild(newTask)
  })

  listBtn.textContent = 'Done'
  listBtn.addEventListener('click', () => {
    list.strike(newTask.textContent)
  })

  inputTask.value = ''
})
