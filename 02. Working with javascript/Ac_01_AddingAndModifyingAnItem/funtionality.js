let taskList = document.getElementById('taskList');
let newTask = document.createElement('li');
newTask.innerText = 'walk the dog';
taskList.appendChild(newTask);
taskList.lastChild.style.color = 'red';
