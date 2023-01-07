import './styles.css';
import {createMain, createProject, closeOverlay} from './dom';
import {todo, project} from './logic';

const navBtns = document.querySelectorAll(".navBtn");
const defaultProject = project("default");

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
    const cancelBtn = document.querySelector(".cancelBtn");
    cancelBtn.addEventListener("click", (e) => {
        closeOverlay();
    });
});

