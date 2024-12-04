// get document and init variables to target element using id and add eventListeners
document.getElementById('add-task').addEventListener('click', (event) => {
  event.preventDefault()
  const inputTask = document.getElementById('input-value')
  const toDoTask = document.getElementById('list')

  const taskText = inputTask.value.trim()
  if (taskText === '') {
    alert('Enter a valid task')
    return
  }

  // Create new task elements
  const newTask = document.createElement('li')
  const taskSpan = document.createElement('span')
  const listBtn = document.createElement('button')

  // Set up the task span and button
  taskSpan.className = 'progress'
  taskSpan.textContent = taskText
  listBtn.textContent = 'Done'

  taskSpan.addEventListener('click', () => {
    newTask.classList.toggle('completed')
    if (newTask.classList.contains('completed')) {
      taskSpan.style.textDecoration = 'line-through' // Strike through text
    } else {
      taskSpan.style.textDecoration = 'none' // Remove strike through
    }
  })

  listBtn.addEventListener('click', () => {
    toDoTask.removeChild(newTask)
  })

  newTask.appendChild(taskSpan)
  newTask.appendChild(listBtn)
  toDoTask.appendChild(newTask) // Clear input field after adding the task

  inputTask.value = ''
})
