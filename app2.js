const tasks = [];

function addTask(description) {
    const task = {
        id: tasks.length + 1,
        description: description,
        completed: false,
    };
    tasks.push(task);
    console.log(`Task added: ${description}`);
}

function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task completed: ${task.description}`);
    } else {
        console.log(`Task not found: ${id}`);
    }
}

function listTasks() {
    console.log("Task List:");
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.description} [${task.completed ? "Completed" : "Pending"}]`);
    });
}

// Example usage:
addTask("Learn JavaScript");
addTask("Build a task tracker");
listTasks();
completeTask(1);
listTasks();