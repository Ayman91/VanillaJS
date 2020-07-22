let addIcon = document.querySelector('.fa-plus')
const input = document.querySelector('input');

// creating task
createTask = () => {
    const taskList = document.querySelector('.task-list');
    const taskItemm = document.createElement('div');
    taskList.appendChild(taskItemm);
    taskItemm.innerHTML =
        `<div class="task-item">
        <i class="arrange-task fas fa-list-ul"></i>
        <p type="text" class="task-title">${input.value}</p>
        <i class="completed fa-lg fas fa-check-square"></i>
        <i class="edit fa-lg fas fa-pen-square"></i>
        <i class="delete fa-lg fas fa-minus-square"></i>
    </div>`
    input.value = '';
};

// EventListeners
addIcon.addEventListener('click', createTask);