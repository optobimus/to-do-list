import './styles.css';
import {createMain} from './dom';
import {todo, project} from './logic';

const navBtns = document.querySelectorAll(".navBtn");

navBtns.forEach((button) => 
    button.addEventListener('click', (e) => {
        navBtns.forEach((button) => {
            button.classList.remove("active");
        });
        button.classList.add("active");
        createMain(button.querySelector("svg").cloneNode(true), button.textContent.trim());
    })
);