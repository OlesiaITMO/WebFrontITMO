const form = document.getElementById('dataForm');
const taskList = document.getElementById('taskList');
const pushin = document.getElementById('Pushin');

function removePushin() {
    if (pushin) {
        pushin.remove();
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDesc = document.getElementById('taskDesc').value;

    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');
    taskItem.innerHTML = `
        <div style="width: 2px !important; display: flex !important; margin-bottom: -0.7vh;"></div>
        <button type="button" class="agree-button" style="margin-left: 65vh !important; margin-bottom: -4.8vh !important; display: flex;">&#10004;</button>
        <button type="button" class="delete-button" style="display: flex !important; margin-left: 71vh !important; margin-bottom: -4vh; z-index: 100000000000000000000000000000000000000000 !important;">&#10006;</button>
        <strong id="head">Отправитель:</strong>
        <div style="max-width: 45vh !important;">${taskName}</div><br>
        <strong style="margin-top: -1.5vh !important; display: flex" id="tail">Вопрос:</strong>
        <div style="max-width: 45vh;">${taskDesc}</div>
    `;


    removePushin();

    taskList.appendChild(taskItem);

    form.reset();

    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function () {
        taskItem.remove();
        saveTasksToLocalStorage();
    });

    const agreeButton = taskItem.querySelector('.agree-button');
    agreeButton.addEventListener('click', function () {
        const taskText = taskItem.querySelectorAll('div');
        taskText.forEach((text) => {
            text.style.textDecoration = 'line-through';
        });
        saveTasksToLocalStorage();
    });

    saveTasksToLocalStorage();
});

function saveTasksToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.taskItem').forEach(item => {
        const taskName = item.querySelector('#head + div').textContent;
        const taskDesc = item.querySelector('#tail + div').textContent;
        tasks.push({ taskName, taskDesc });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('taskItem');
            taskItem.innerHTML = `
                <div style="width: 2px !important; display: flex !important; margin-bottom: -0.7vh;"></div>
                <button type="button" class="agree-button" style="margin-left: 65vh !important; margin-bottom: -4.8vh !important; display: flex;">&#10004;</button>
                <button type="button" class="delete-button" style="display: flex !important; margin-left: 71vh !important; margin-bottom: -4vh; z-index: 100000000000000000000000000000000000000000 !important;">&#10006;</button>
                <strong id="head">Отправитель:</strong>
                <div style="max-width: 45vh !important;">${task.taskName}</div><br>
                <strong style="margin-top: -1.5vh !important; display: flex" id="tail">Вопрос:</strong>
                <div style="max-width: 45vh;">${task.taskDesc}</div>
            `;

            taskList.appendChild(taskItem);


            removePushin();

            const deleteButton = taskItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                taskItem.remove();
                saveTasksToLocalStorage();
            });

            const agreeButton = taskItem.querySelector('.agree-button');
            agreeButton.addEventListener('click', function () {
                const taskText = taskItem.querySelectorAll('div');
                taskText.forEach(text => {
                    text.style.textDecoration = 'line-through';
                });
                saveTasksToLocalStorage();
            });
        });
    }
}

window.addEventListener('load', loadTasksFromLocalStorage);
