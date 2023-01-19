import { differenceInDays, format, parseISO} from "date-fns"

export function createMain(svg, name) {
    const main = document.querySelector(".main");
    const header = document.querySelector(".header");
    header.innerHTML = "";
    header.appendChild(svg);
    const title = document.createElement("h1");
    title.textContent = name;
    header.appendChild(title);
}

export function createProject() {
    const content = document.querySelector(".content");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const inputBox = document.createElement("div");
    inputBox.classList.add("inputBox");
    const inputField = document.createElement("input");
    inputField.classList.add("inputField");
    inputField.placeholder = "Project name";
    const btns = document.createElement("div");
    btns.classList.add("inputButtons");
    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirmBtn");
    confirmBtn.classList.add("inputBtn");
    confirmBtn.textContent = "Create";
    const abortBtn = document.createElement("button");
    abortBtn.classList.add("cancelBtn");
    abortBtn.classList.add("inputBtn");
    abortBtn.textContent = "Cancel";

    inputBox.appendChild(inputField);
    btns.appendChild(confirmBtn);
    btns.appendChild(abortBtn);
    inputBox.appendChild(btns);
    overlay.appendChild(inputBox);
    content.appendChild(overlay);
}

export function closeOverlay() {
    const content = document.querySelector(".content");
    content.removeChild(content.lastElementChild);
}

export function displayProjects(currentProjects, activeProject) {
    const projects = document.querySelector(".projects");
    projects.innerHTML = "";
    let index = 0;
    currentProjects.forEach(project => {
        const projectLeft = document.createElement("div");
        const projectRight = document.createElement("div");
        projectLeft.classList.add("projectLeft");
        projectRight.classList.add("projectRight");
        const dProject = document.createElement("button");
        dProject.classList.add("project");
        projectLeft.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 3.75zm4 0A.75.75 0 016.75 3h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 3.75zm-4 4A.75.75 0 012.75 7h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 7.75zm4 0A.75.75 0 016.75 7h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 7.75zm-4 4a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zm4 0a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></g></svg>' 
        + project.getTitle();
        

        if (activeProject) {
            if (activeProject.dataset.title === project.getTitle()) {
                dProject.classList.add("active");
            }
        }

        projectRight.innerHTML = '<svg class="removeSVG" hidden viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"></path></g></svg>';
        dProject.appendChild(projectLeft);
        dProject.appendChild(projectRight);
        dProject.setAttribute("data-index", index++);
        
        projects.appendChild(dProject);
    });
}

export function displayRemoveButton(node) {
    const removeButton = node.lastElementChild;
    removeButton.style.display = "flex";
    removeButton.style.alignItems = "center";
}

export function hideRemoveButton(node) {
    const removeButton = node.lastElementChild;
    removeButton.style.display = "none";
}

export function createTask() {
    const content = document.querySelector(".content");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const inputBox = document.createElement("div");
    inputBox.classList.add("taskInputBox");
    const inputField = document.createElement("input");
    inputField.classList.add("nameField");
    inputField.placeholder = "Task name";
    const description = document.createElement("input");
    description.classList.add("descriptionField");
    description.placeholder = "Description (optional)";

    const dateLabel = document.createElement("label");
    dateLabel.classList.add("dateLabel");
    dateLabel.textContent = "Due Date";
    const date = document.createElement("input");
    date.classList.add("dateField");
    date.type = "date";
    date.id = "dueDate";
    date.value = format(new Date(), "yyyy-MM-dd");
    date.min = "2023-01-01";
    date.max = "2099-12-31";

    const priorityLabel = document.createElement("label");
    priorityLabel.classList.add("priorityLabel");
    priorityLabel.textContent = "Priority";
    const priority = document.createElement("div");
    priority.classList.add("priorityField");
    const pbutton1 = document.createElement("button");
    pbutton1.id = 0;
    pbutton1.classList.add("priorityButton");
    pbutton1.classList.add("priorityButtonLow");
    pbutton1.textContent = "Low";
    const pbutton2 = document.createElement("button");
    pbutton2.id = 1;
    pbutton2.classList.add("active");
    pbutton2.classList.add("priorityButton");
    pbutton2.classList.add("priorityButtonMedium");
    pbutton2.textContent = "Medium";
    const pbutton3 = document.createElement("button");
    pbutton3.id = 2;
    pbutton3.classList.add("priorityButton");
    pbutton3.classList.add("priorityButtonHigh");
    pbutton3.textContent = "High";

    const btns = document.createElement("div");
    btns.classList.add("inputButtons");
    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirmBtn");
    confirmBtn.classList.add("inputBtn");
    confirmBtn.textContent = "Create";
    const abortBtn = document.createElement("button");
    abortBtn.classList.add("cancelBtn");
    abortBtn.classList.add("inputBtn");
    abortBtn.textContent = "Cancel";

    inputBox.appendChild(inputField);
    inputBox.appendChild(description);
    inputBox.appendChild(dateLabel);
    inputBox.appendChild(date);
    priority.appendChild(pbutton1);
    priority.appendChild(pbutton2);
    priority.appendChild(pbutton3);
    inputBox.appendChild(priorityLabel);
    inputBox.appendChild(priority);

    btns.appendChild(confirmBtn);
    btns.appendChild(abortBtn);
    inputBox.appendChild(btns);
    overlay.appendChild(inputBox);
    content.appendChild(overlay);
}

export function displayTasks(currentTasks) {
    const tasks = document.querySelector(".tasks");
    tasks.innerHTML = "";
    let index = 0;
    currentTasks.forEach(task => {
        const taskLeft = document.createElement("div");
        const taskRight = document.createElement("div");
        taskLeft.classList.add("taskLeft");
        taskRight.classList.add("taskRight");
        const dTask = document.createElement("button");
        dTask.classList.add("task");
        const name = document.createElement("div");
        name.innerHTML = task.getTitle();

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("checkBox");

        if (task.getChecked()){
            checkBox.checked = true;
            dTask.style.textDecoration = "line-through";
        }

        taskLeft.appendChild(checkBox);
        taskLeft.appendChild(name);

        taskRight.innerHTML = '<svg class="removeSVG" hidden viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"></path></g></svg>';
        dTask.appendChild(taskLeft);
        dTask.appendChild(taskRight);
        dTask.setAttribute("data-index", index++);

        
        dTask.setAttribute("data-taskid", task.getId());
        
        tasks.appendChild(dTask);
    });
}

export function displayTasksByDate(projects, type) {
    const date = format(new Date(), "yyyy-MM-dd");
    let dateTasks = [];

    projects.forEach((project) => {
        project.getTodos().forEach((todo) => {
            const dueDate = todo.getDueDate();
            switch (type) {
                case "day":
                    if (differenceInDays(parseISO(dueDate), parseISO(date)) === 0) {
                        dateTasks.push(todo);
                    }
                    break;
                case "week":
                    if (differenceInDays(parseISO(dueDate), parseISO(date)) < 7) {
                        dateTasks.push(todo);
                    }
                    break;
            }
        });
    });
    displayTasks(dateTasks);
}

const addTaskBtn = document.querySelector(".addTaskBtn");
export function showAddTaskButton() {
    addTaskBtn.style.display = "flex";
}

export function hideAddTaskButton() {
    addTaskBtn.style.display = "none";
}