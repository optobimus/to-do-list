import './styles.css';
import {createMain, createProject, closeOverlay, displayProjects, displayRemoveButton, hideRemoveButton} from './dom';
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
        domProject.addEventListener('click', (e) => {
            domProjects.forEach((domProject) => {
                domProject.classList.remove("active");
            });
            domProject.classList.add("active");
            createMain(domProject.querySelector("svg").cloneNode(true), domProject.textContent.trim());
        });
    });
    let projectRight = document.querySelectorAll(".projectRight");
    projectRight.forEach((button) => {
        button.addEventListener("click", (e) => {
            //console.log(button.parentNode.dataset.index);
            projects = projects.filter((project, i) => projects.indexOf(project) !== parseInt(button.parentNode.dataset.index));
            displayProjects(projects);
        });
    });
});

