var addSkillButton = document.getElementById("AddSkillButton");
var skillContainer = document.getElementById("AddSkillsContainer");
var resumeForm = document.getElementById("resume-container");
var resumePreviewElement = document.getElementById("Resume-Preview");
addSkillButton.addEventListener("click", function () {
    var newSkillInput = document.createElement("input");
    newSkillInput.name = "skills[]";
    newSkillInput.type = "text";
    newSkillInput.placeholder = "Enter Your Skill";
    newSkillInput.className = "skill-input";
    skillContainer.appendChild(newSkillInput);
});
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collecting personal information
    var pictureInput = document.getElementById("Picture");
    var pictureURL = '';
    if (pictureInput.files && pictureInput.files[0]) {
        pictureURL = URL.createObjectURL(pictureInput.files[0]);
    }
    var jobName = document.getElementById("JobName").value;
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("Email").value;
    var address = document.getElementById("Address").value;
    var country = document.getElementById("Country").value;
    var city = document.getElementById("City").value;
    var phone = document.getElementById("PhoneNumber").value;
    // Collecting work experience
    var companyName = document.getElementById("CompanyName").value;
    var yourLastJob = document.getElementById("YourLastJob").value;
    var jobDescription = document.getElementById("JobDescription").value;
    // Collecting skills
    var skills = "";
    var skillInputs = skillContainer.querySelectorAll("input[name='skills[]']");
    skillInputs.forEach(function (skillInput) {
        if (skillInput.value) {
            skills += "<li>".concat(skillInput.value, "</li>");
        }
    });
    // Collecting education information
    var instituteName = document.getElementById("InstituteName").value;
    var degree = document.getElementById("Degree").value;
    var yearsOfEducation = document.getElementById("YearsOfEducation").value;
    var educationDescription = document.getElementById("EducationTextArea").value;
    var resumeContent = "\n\t\t<h2>Your Resume</h2><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<h3>Personal Information</h3><hr style=\"border: 1px solid #333; margin: 10px 0;\">\n\t\t<p><strong>Job Name:</strong> ".concat(jobName, "</p>\n\t  ").concat(pictureURL ? "<img src=\"".concat(pictureURL, "\" alt=\"Profile Picture\" style=\"width:100px; height:auto; border-radius:50%; display:block; margin:10px 0;\" />") : "", "\n\t\t<p><strong>First Name:</strong> ").concat(firstName, "</p>\n\t\t<p><strong>Last Name:</strong> ").concat(lastName, "</p>\n\t\t<p><strong>Email:</strong> ").concat(email, "</p>\n\t\t<p><strong>Address:</strong> ").concat(address, "</p>\n\t\t<p><strong>Country:</strong> ").concat(country, "</p>\n\t\t<p><strong>City:</strong> ").concat(city, "</p>\n\t\t<p><strong>Phone Number:</strong> ").concat(phone, "</p>\n\n\t\t<h3>Work Experience</h3><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<p><strong>Company Name:</strong> ").concat(companyName, "</p>\n\t\t<p><strong>Last Job:</strong> ").concat(yourLastJob, "</p>\n\t\t<p><strong>Job Description:</strong> ").concat(jobDescription, "</p>\n\n\t\t<h3>Skills</h3><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<ul>").concat(skills, "</ul>\n\n\t\t<h3>Education</h3><hr style=\"border: 1px solid #aaaaaa; margin: 10px 0;\">\n\t\t<p><strong>Institute Name:</strong> ").concat(instituteName, "</p>\n\t\t<p><strong>Degree:</strong> ").concat(degree, "</p>\n\t\t<p><strong>Years of Education:</strong> ").concat(yearsOfEducation, "</p>\n\t\t<p><strong>Education Description:</strong> ").concat(educationDescription, "</p>\n\t");
    resumePreviewElement.innerHTML = resumeContent;
});
