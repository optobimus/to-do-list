import './styles.css';
import {createMain, createProject, closeOverlay, displayProjects, displayRemoveButton, hideRemoveButton, createTask, displayTasks, displayTasksByDate} from './dom';
import {todo, project} from './logic';

const navBtns = document.querySelectorAll(".navBtn");
const defaultProject = project("defaultProject");
let projects = [];
projects.push(defaultProject);

navBtns.forEach((button) => 
    button.addEventListener('click', (e) => {
        navBtns.forEach((button) => {
            button.classList.remove("active");
        });
        button.classList.add("active");
        createMain(button.querySelector("svg").cloneNode(true), button.textContent.trim());
        if (button.textContent.trim() == "Today") {
            displayTasksByDate(projects, "day");
        } else if (button.textContent.trim() == "This Week") {
            displayTasksByDate(projects, "week");
        }
    })
);

const projectBtn = document.querySelector(".addProjectBtn");
projectBtn.addEventListener("click", (e) => {
    createProject();
    const inputField = document.querySelector(".inputField");
    const inputBox = document.querySelector(".inputBox");
    const cancelBtn = document.querySelector(".cancelBtn");
    const submitBtn = document.querySelector(".confirmBtn");
    //inputBox.setAttribute("tabindex", -1);
    inputField.focus();

    
    cancelBtn.addEventListener("click", (e) => {
        closeOverlay();
    });

    
    submitBtn.addEventListener("click", (e) => {
        if (projects.length !== 0 && projects[0].getTitle() == "defaultProject") {
            projects.pop();
        }
        projects.push(project(inputField.value));
        displayProjects(projects);

        closeOverlay(); 
    });
    inputBox.addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
            if (projects.length !== 0 && projects[0].getTitle() == "defaultProject") {
                projects.pop();
            }
            projects.push(project(inputField.value));
            displayProjects(projects);

            closeOverlay(); 
        }
        
    });
});

const projectContainer = document.querySelector(".projects");
projectContainer.addEventListener("mouseenter", (e) => {
    const domProjects = document.querySelectorAll(".project");
    domProjects.forEach((domProject) => {
        domProject.addEventListener("mouseenter", (e) => {
            displayRemoveButton(domProject);
        });
        
        domProject.addEventListener("mouseleave", (event) => {
            hideRemoveButton(domProject);
        });
        domProject.firstChild.addEventListener('click', (e) => {
            domProjects.forEach((domProject) => {
                domProject.classList.remove("active");
            });
            domProject.classList.add("active");
            createMain(domProject.querySelector("svg").cloneNode(true), domProject.textContent.trim());
            displayTasks(projects[domProject.dataset.index].getTodos());
        });
    });
    let projectRight = document.querySelectorAll(".projectRight");
    projectRight.forEach((button) => {
        button.addEventListener("click", (e) => {
            //console.log(button.parentNode.dataset.index);

            projects = projects.filter((project, i) => projects.indexOf(project) !== parseInt(button.parentNode.dataset.index));
            displayProjects(projects);

            const navBtn = document.querySelector(".navBtn.active");
            console.log(navBtn);
            createMain(navBtn.querySelector("svg").cloneNode(true), navBtn.textContent.trim());

            displayTasks(button.parentNode.getTodos());
        });
    });
});

const taskBtn = document.querySelector(".addTaskBtn");
taskBtn.addEventListener("click", (e) => {
    const activeProject = document.querySelector(".project.active");
    createTask();
    const nameField = document.querySelector(".nameField");
    const descriptionField = document.querySelector(".descriptionField");
    const dateField = document.querySelector(".dateField");

    const taskInputBox = document.querySelector(".taskInputBox");
    const cancelBtn = document.querySelector(".cancelBtn");
    const submitBtn = document.querySelector(".confirmBtn");
    //inputBox.setAttribute("tabindex", -1);
    nameField.focus();

    
    cancelBtn.addEventListener("click", (e) => {
        closeOverlay();
    });

    
    submitBtn.addEventListener("click", (e) => {
        const priorityButton = document.querySelector(".priorityButton.active");
        const priority = priorityButton.id;
        console.log(activeProject);
        projects[activeProject.dataset.index].addTodo(todo(nameField.value, descriptionField.value, dateField.value, priority));
        console.log(projects[activeProject.dataset.index].getTodos());
        displayTasks(projects[activeProject.dataset.index].getTodos());

        closeOverlay(); 
    });

    taskInputBox.addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
            projects.push(project(inputField.value));
    
            closeOverlay(); 
        }
        
    });
});

const tasksContainer = document.querySelector(".tasks");
tasksContainer.addEventListener("mouseenter", (e) => {

    const activeProject = document.querySelector(".project.active");
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        task.addEventListener("mouseenter", (e) => {
            displayRemoveButton(task);
        });
        
        task.addEventListener("mouseleave", (event) => {
            hideRemoveButton(task);
        });
    });
    let taskRight = document.querySelectorAll(".taskRight");
    taskRight.forEach((button) => {
        button.addEventListener("click", (e) => {
            //console.log(button.parentNode.dataset.index);
            projects[activeProject.dataset.index].removeTodo(button.parentNode.dataset.index);
            displayTasks(projects[activeProject.dataset.index].getTodos());

            const navBtn = document.querySelector(".navBtn.active");
            console.log(navBtn);
            createMain(navBtn.querySelector("svg").cloneNode(true), navBtn.textContent.trim());
        });
    });

    let checkBoxes = document.querySelectorAll(".checkBox");
    checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                checkBox.parentNode.parentNode.style.textDecoration = "line-through";
            } else {
                checkBox.parentNode.parentNode.style.textDecoration = "none";
            }
        });
    });
    
});
