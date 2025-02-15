const tasks = [];
const taskInput = document.getElementById('taskInput');
const taskBtn = document.querySelector('.task-btn');
const taskList = document.getElementById('list-tasks');

function addTask() {
    if (taskInput.value.trim() === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    const task = {
        id: tasks.length + 1,
        description: taskInput.value,
        done: false,
    };
    tasks.push(task);
    taskInput.value = ''; // Limpiar el campo de entrada
    listTasks(); // Actualizar la lista de tareas
}

function listTasks() {
    // Ordenar tareas: primero las no completadas, luego las completadas
    tasks.sort((a, b) => a.done - b.done);

    let html = ''; // Variable para acumular el HTML de las tareas

    tasks.forEach(task => {
        html += `
            <li id="task-${task.id}">
                <div>
                    <input type="checkbox" id="checkbox-${task.id}" ${task.done ? 'checked' : ''}>
                    <span id="span-${task.id}" class="${task.done ? 'completed' : ''}">${task.description}</span>
                </div>
                <button onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
            </li>
        `;
    });

    taskList.innerHTML = html; // Actualizar el contenido del contenedor

    // Asignar eventos a los checkboxes después de renderizar la lista
    tasks.forEach(task => {
        const checkbox = document.getElementById(`checkbox-${task.id}`);
        const spanInput = document.getElementById(`span-${task.id}`);
    
        checkbox.addEventListener('change', function () {
            task.done = this.checked; // Actualizar el estado en el array
    
            // Asegurarse de que solo el span tenga la clase 'completed'
            if (task.done) {
                spanInput.classList.add('completed');
            } else {
                spanInput.classList.remove('completed');
            }
    
            listTasks(); // Volver a renderizar la lista ordenada
        });
    });
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); // Eliminar la tarea del array
        listTasks(); // Actualizar la lista de tareas
    }
}

taskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask()
    }
});
