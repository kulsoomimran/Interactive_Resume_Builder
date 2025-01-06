var _a;
//Show input feilds on the clicking on start button
var startButton = document.getElementById("startButton");
var container = document.getElementById("container");
var openButton = document.getElementById("openButton");
if (startButton && container) {
    startButton.addEventListener("click", function () {
        openButton.style.display = "none";
        container.style.display = "block";
    });
}
// Generate the resume content on form submission
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture user inputs
    var name = document.getElementById('name').value;
    var obj = document.getElementById('obj').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    var educations = Array.from(document.getElementsByClassName('education')).map(function (input) { return input.value; });
    var certifications = Array.from(document.getElementsByClassName('certification')).map(function (input) { return input.value; });
    var works = Array.from(document.getElementsByClassName('work')).map(function (input) { return input.value; });
    var skills = Array.from(document.getElementsByClassName('skill')).map(function (input) { return input.value; });
    var reference = document.getElementById('reference').value;
    // the resume section with the gathered information
    var generatedResume = document.getElementById('generated-resume');
    generatedResume.innerHTML = "\n        <div class=\"resume-content\">\n            <h2>".concat(name, "</h2>\n            <p><strong>Objective:</strong> ").concat(obj, "</p>\n            <h3>Personal Information</h3>\n            ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>First Name:</strong> ").concat(firstName, "</p>\n            <p><strong>Last Name:</strong> ").concat(lastName, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n           \n            <h3>Education</h3>\n            <ul>").concat(educations, "</ul>\n            \n            <h3>Certification</h3>\n            <ul>").concat(certifications, "</ul>\n\n            <h3>Work Experience</h3>\n            <ul>").concat(works, "</ul>\n             \n            <h3>Skills</h3>\n            <ul>").concat(skills, "</ul>\n\n            <p><strong>Reference:</strong> ").concat(reference, "</p>\n\n            </div>\n    ");
    document.getElementById('resume').style.display = 'block';
});
