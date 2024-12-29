"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skillButton = document.getElementById('toggleSkills');
const skills = document.getElementById('skills');
skillButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
