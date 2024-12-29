"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to add an additional education field
function addEducationField() {
    const educationSection = document.getElementById('education-section');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'education-entry';
    newEducationEntry.innerHTML = `
        <label>Degree and School:</label>
        <input type="text" class="education" name="education" required>
    `;
    educationSection.appendChild(newEducationEntry);
}
// Function to add an additional language field
function addLanguageField() {
    const languageSection = document.getElementById('language-section');
    const newLanguageEntry = document.createElement('div');
    newLanguageEntry.className = 'language-entry';
    newLanguageEntry.innerHTML = `
        <label>Language:</label>
        <input type="text" class="language" name="language" required>
    `;
    languageSection.appendChild(newLanguageEntry);
}
// Function to add an additional certification field
function addCertificationField() {
    const CertificationSection = document.getElementById('certification-section');
    const newCertificationEntry = document.createElement('div');
    newCertificationEntry.className = 'certification-entry';
    newCertificationEntry.innerHTML = `
        <label>Degree and School:</label>
        <input type="text" class="certification" name="certification" required>
    `;
    CertificationSection.appendChild(newCertificationEntry);
}
// Function to add an additional work field
function addWorkField() {
    const workSection = document.getElementById('work-section');
    const newWorkEntry = document.createElement('div');
    newWorkEntry.className = 'work-entry';
    newWorkEntry.innerHTML = `
        <label>Position and Company:</label>
        <input type="text" class="work" name="work" required>
    `;
    workSection.appendChild(newWorkEntry);
}
// Function to add an additional skill field
function addSkillField() {
    const skillsSection = document.getElementById('skills-section');
    const newSkillEntry = document.createElement('div');
    newSkillEntry.className = 'skills-entry';
    newSkillEntry.innerHTML = `
        <label>Skill:</label>
        <input type="text" class="skill" name="skills" required>
    `;
    skillsSection.appendChild(newSkillEntry);
}
//Show input feilds on the clicking on start button
const startButton = document.getElementById("startButton");
const container = document.getElementById("container");
const openButton = document.getElementById("openButton");
if (startButton && container) {
    startButton.addEventListener("click", () => {
        openButton.style.display = "none";
        container.style.display = "block";
    });
}
// Generate the resume content on form submission
document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture user inputs
    const name = document.getElementById('name').value;
    const obj = document.getElementById('obj').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profilePictureInput = document.getElementById('profilePicture');
    const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    const educations = Array.from(document.getElementsByClassName('education')).map(input => input.value);
    const certifications = Array.from(document.getElementsByClassName('certification')).map(input => input.value);
    const works = Array.from(document.getElementsByClassName('work')).map(input => input.value);
    const skills = Array.from(document.getElementsByClassName('skill')).map(input => input.value);
    const reference = document.getElementById('reference').value;
    // the resume section with the gathered information
    const generatedResume = document.getElementById('generated-resume');
    generatedResume.innerHTML = `
        <div class="resume-content">
            <h2>${name}</h2>
            <p><strong>Objective:</strong> ${obj}</p>
            <h3>Personal Information</h3>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
           
            <h3>Education</h3>
            <ul>${educations.map(edu => `<li>${edu}</li>`).join('')}</ul>
            
            <h3>Certification</h3>
            <ul>${certifications.map(certi => `<li>${certi}</li>`).join('')}</ul>

            <h3>Work Experience</h3>
            <ul>${works.map(work => `<li>${work}</li>`).join('')}</ul>
             
            <h3>Skills</h3>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>

            <p><strong>Reference:</strong> ${reference}</p>

            </div>
    `;
    document.getElementById('resume').style.display = 'block';
});
