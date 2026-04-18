document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');
        const taskSpan = li.querySelector('.task-text');

        completeBtn.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});