const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');

const addTask = (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if(!taskText) {
        return;
    }
    const li = document.createElement('li');
    // li.textContent = taskText;
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="taskButtons">
        <button class="editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>
    `

    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    })
}

addTaskBtn.addEventListener('click', (e) => {
    addTask(e);
})