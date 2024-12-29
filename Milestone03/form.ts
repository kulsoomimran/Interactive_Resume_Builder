//Show input feilds on the clicking on start button
const startButton = document.getElementById("startButton") as HTMLButtonElement;
const container = document.getElementById("container") as HTMLDivElement;
const openButton = document.getElementById("openButton") as HTMLDivElement;


if (startButton && container ) {
  startButton.addEventListener("click", () => {
    openButton.style.display = "none";
    container.style.display = "block";
  });
} 


// Generate the resume content on form submission
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const obj = (document.getElementById('obj') as HTMLInputElement).value;
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    const educations = Array.from(document.getElementsByClassName('education') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const certifications = Array.from(document.getElementsByClassName('certification') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const works = Array.from(document.getElementsByClassName('work') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const skills = Array.from(document.getElementsByClassName('skill') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const reference = (document.getElementById('reference') as HTMLInputElement).value;
    
    // the resume section with the gathered information
    const generatedResume = document.getElementById('generated-resume') as HTMLDivElement;
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
            <ul>${educations}</ul>
            
            <h3>Certification</h3>
            <ul>${certifications}</ul>

            <h3>Work Experience</h3>
            <ul>${works}</ul>
             
            <h3>Skills</h3>
            <ul>${skills}</ul>

            <p><strong>Reference:</strong> ${reference}</p>

            </div>
    `;

    document.getElementById('resume')!.style.display = 'block';
});