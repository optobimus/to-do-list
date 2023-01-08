import './styles.css';
import {createMain, createProject, closeOverlay, displayProjects, displayRemoveButton, hideRemoveButton} from './dom';
import {todo, project} from './logic';

const navBtns = document.querySelectorAll(".navBtn");
const defaultProject = project("defaultProject");
const projects = [];
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
    const inputField = document.querySelector(".inputField")

    const cancelBtn = document.querySelector(".cancelBtn");
    cancelBtn.addEventListener("click", (e) => {
        closeOverlay();
    });

    const submitBtn = document.querySelector(".confirmBtn");
    submitBtn.addEventListener("click", (e) => {
        if (projects[0].getTitle() == "defaultProject") {
            projects.pop();
        }
        projects.push(project(inputField.value));
        displayProjects(projects);
        let domProjects = document.querySelectorAll(".project");

        domProjects.forEach((project) =>
            project.addEventListener("mouseenter", (e) => {
                displayRemoveButton(project);
            })
        );

        domProjects.forEach((project) =>
            project.addEventListener("mouseleave", (e) => {
                hideRemoveButton(project);
            })
        );
        closeOverlay();
    });
});