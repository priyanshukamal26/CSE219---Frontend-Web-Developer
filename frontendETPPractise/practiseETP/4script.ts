type Task = {
    taskName: string;
    completed: boolean;
};

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

addBtn.addEventListener("click", () => {

    const task: Task = {
        taskName: taskInput.value,
        completed: false
    };

    const li = document.createElement("li");

    li.textContent = task.taskName;

    li.addEventListener("click", () => {

        task.completed = true;

        li.classList.add("completed");

    });

    taskList.appendChild(li);

    taskInput.value = "";

});