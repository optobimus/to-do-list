import './styles.css';
import {createMain, createProject, closeOverlay, displayProjects, displayRemoveButton, hideRemoveButton, createTask, displayTasks, displayTasksByDate, hideAddTaskButton, showAddTaskButton} from './dom';
import {todo, project, inbox} from './logic';

const navBtns = document.querySelectorAll(".navBtn");

const projectBtn = document.querySelector(".addProjectBtn");
let projects = [];
let taskId = 0;
const defaultProject = project("Project");
projects.push(defaultProject);
displayProjects(projects);

navBtns.forEach((button) => 
    button.addEventListener('click', (e) => {
        navBtns.forEach((button) => {
            button.classList.remove("active");
        });
        button.classList.add("active");
        createMain(button.querySelector("svg").cloneNode(true), button.textContent.trim());
        if (button.textContent.trim() === "Today") {
            displayTasksByDate(projects, "day");
            hideAddTaskButton();
        } else if (button.textContent.trim() === "This Week") {
            displayTasksByDate(projects, "week");
            hideAddTaskButton();
        } else {
            displayTasks(inbox.getTodos());
            const domProjects = document.querySelectorAll(".project");
            domProjects.forEach((domProject) => {
                domProject.classList.remove("active");
                //displayProjects(projects);
            });
            showAddTaskButton();
        }
        const domProjects = document.querySelectorAll(".project");
        domProjects.forEach((domProject) => {
            domProject.classList.remove("active");
        });
    })
);

projectBtn.addEventListener("click", (e) => {
    createProject();
    const inputField = document.querySelector(".inputField");
    const inputBox = document.querySelector(".inputBox");
    const cancelBtn = document.querySelector(".cancelBtn");
    const submitBtn = document.querySelector(".confirmBtn");

    const activeProject = document.querySelector(".project.active");
    inputField.focus();

    
    cancelBtn.addEventListener("click", (e) => {
        closeOverlay();
    });

    function submitProject() {
        let unique = true;
        projects.forEach((project) => {
            if (inputField.value === project.getTitle()) {
                unique = false;
                alert("A project with this name already exists");
            }
        });
        if (unique) {
            projects.push(project(inputField.value));
            if (activeProject) activeProject.setAttribute("data-title", projects[activeProject.dataset.index].getTitle());

            displayProjects(projects, activeProject);
            closeOverlay();
        }
        
        showAddTaskButton();
    }
    
    submitBtn.addEventListener("click", (e) => {
        submitProject();
    });

    inputBox.addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
            submitProject();
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
             
            navBtns.forEach((button) => {
                button.classList.remove("active");
            });
            domProject.classList.add("active");
            createMain(domProject.querySelector("svg").cloneNode(true), domProject.textContent.trim());
            displayTasks(projects[domProject.dataset.index].getTodos());
            showAddTaskButton();
        });
    });
    let projectRight = document.querySelectorAll(".projectRight");
    projectRight.forEach((button) => {
        button.addEventListener("click", (e) => {
            const activeProject = document.querySelector(".project.active");

            if (activeProject) activeProject.setAttribute("data-title", projects[activeProject.dataset.index].getTitle());

            projects = projects.filter((project) => projects.indexOf(project) !== parseInt(button.parentNode.dataset.index));
            displayProjects(projects, activeProject);

            if (activeProject === button.parentNode) {
                const navBtn = document.querySelector(".navBtn");
                navBtn.classList.add("active");
                createMain(navBtn.querySelector("svg").cloneNode(true), navBtn.textContent.trim());
                displayTasks(inbox.getTodos());
                
            }

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

    const priorityButtons = document.querySelectorAll(".priorityButton");
    priorityButtons.forEach((button) => {
        button.addEventListener(("click"), (e) => {
            priorityButtons.forEach((button) => {
                button.classList.remove("active");
            });
            button.classList.add("active");
        });
    });

    
    cancelBtn.addEventListener("click", (e) => {
        closeOverlay();
    });

    function checkName() {
        let unique = true;
        function setNotUnique() {
            unique = false;
            alert("A task with this name already exists");
        }

        if (activeProject === null) {
            inbox.getTodos().forEach((todo) => {
                if (nameField.value === todo.getTitle()){
                    setNotUnique();
                }
            })
        } else {
            projects[activeProject.dataset.index].getTodos().forEach((todo) => {
                if (nameField.value === todo.getTitle()){
                    setNotUnique();
                }
            });
        }
        return unique;
    }

    function submitTask() {
        const priorityButton = document.querySelector(".priorityButton.active");
        const priority = priorityButton.id;

        if(checkName()) {
            if (activeProject === null) {
                inbox.addTodo(todo(taskId, nameField.value, descriptionField.value, dateField.value, priority));
                displayTasks(inbox.getTodos());
            } else {
                projects[activeProject.dataset.index].addTodo(todo(taskId, nameField.value, descriptionField.value, dateField.value, priority));
                displayTasks(projects[activeProject.dataset.index].getTodos());
            
            }
            
            taskId++;
            closeOverlay(); 
        }

        
    }

    submitBtn.addEventListener("click", (e) => {
        submitTask();       
    });

    taskInputBox.addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
            submitTask();
        }
    });
});

const tasksContainer = document.querySelector(".tasks");
tasksContainer.addEventListener("mouseenter", (e) => {
    const activeNav = document.querySelector(".navBtn.active");
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
             if(activeNav) {
                console.log(activeNav.textContent.trim());
                if (activeNav.textContent.trim() === "This Week" || activeNav.textContent.trim() === "Today"){
                    projects.forEach((project) => {
                        project.getTodos().forEach((todo) => {
                            if (todo.getId() === parseInt(button.parentNode.dataset.taskid)) {
                                project.removeTodo(button.parentNode.dataset.taskid);
                            }
                        });
                        
                        // above function from navBtns
                    }); 
                    if (activeNav.textContent.trim() === "Today") {
                        displayTasksByDate(projects, "day");
                    } else if (activeNav.textContent.trim() === "This Week") {
                        displayTasksByDate(projects, "week");
                    } else {
                        displayTasks(inbox.getTodos());
                        const domProjects = document.querySelectorAll(".project");
                        domProjects.forEach((domProject) => {
                            domProject.classList.remove("active");
                            //displayProjects(projects);
                        });
                    }
                }  
            } else if (activeProject === null) {
                inbox.removeTodo(button.parentNode.dataset.index);
                displayTasks(inbox.getTodos());
            } else {
                projects[activeProject.dataset.index].removeTodo(button.parentNode.dataset.taskid);
                displayTasks(projects[activeProject.dataset.index].getTodos());   
            }
            
        });
    });

    let checkBoxes = document.querySelectorAll(".checkBox");
    checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                checkBox.parentNode.parentNode.style.textDecoration = "line-through";
                if (activeProject === null) {
                    inbox.getTodos()[checkBox.parentNode.parentNode.dataset.index].complete();
                } else {
                    projects[activeProject.dataset.index].getTodos()[checkBox.parentNode.parentNode.dataset.index].complete();
                }
            } else {
                checkBox.parentNode.parentNode.style.textDecoration = "none";
                if (activeProject === null) {
                    inbox.getTodos()[checkBox.parentNode.parentNode.dataset.index].uncheck();
                } else {
                    projects[activeProject.dataset.index].getTodos()[checkBox.parentNode.parentNode.dataset.index].uncheck();
                }
            }
        });
    });
    
});
