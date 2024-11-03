const addSkillButton = document.getElementById("AddSkillButton") as HTMLButtonElement;
const skillContainer = document.getElementById("AddSkillsContainer") as HTMLDivElement;
const resumeForm = document.getElementById("resume-container") as HTMLFormElement;
const resumePreviewElement = document.getElementById("Resume-Preview") as HTMLDivElement;

addSkillButton.addEventListener("click", function () {
	const newSkillInput = document.createElement("input");
	newSkillInput.name = "skills[]";
	newSkillInput.type = "text";
	newSkillInput.placeholder = "Enter Your Skill";
	newSkillInput.className = "skill-input";
	skillContainer.appendChild(newSkillInput);
});

resumeForm.addEventListener("submit", (event: Event) => {
	event.preventDefault();

	// Collecting personal information
	 const pictureInput = document.getElementById("Picture") as HTMLInputElement;
    let pictureURL = '';
    if (pictureInput.files && pictureInput.files[0]) {
        pictureURL = URL.createObjectURL(pictureInput.files[0]);
	}
	const jobName = (document.getElementById("JobName") as HTMLInputElement).value;
	const firstName = (document.getElementById("FirstName") as HTMLInputElement).value;
	const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
	const email = (document.getElementById("Email") as HTMLInputElement).value;
	const address = (document.getElementById("Address") as HTMLInputElement).value;
	const country = (document.getElementById("Country") as HTMLInputElement).value;
	const city = (document.getElementById("City") as HTMLInputElement).value;
	const phone = (document.getElementById("PhoneNumber") as HTMLInputElement).value;

	// Collecting work experience
	const companyName = (document.getElementById("CompanyName") as HTMLInputElement).value;
	const yourLastJob = (document.getElementById("YourLastJob") as HTMLInputElement).value;
	const jobDescription = (document.getElementById("JobDescription") as HTMLTextAreaElement).value;

	// Collecting skills
	let skills = "";
	const skillInputs = skillContainer.querySelectorAll("input[name='skills[]']") as NodeListOf<HTMLInputElement>;
	skillInputs.forEach((skillInput) => {
		if (skillInput.value) {
			skills += `<li>${skillInput.value}</li>`;
		}
	});

	// Collecting education information
	const instituteName = (document.getElementById("InstituteName") as HTMLInputElement).value;
	const degree = (document.getElementById("Degree") as HTMLInputElement).value;
	const yearsOfEducation = (document.getElementById("YearsOfEducation") as HTMLInputElement).value;
	const educationDescription = (document.getElementById("EducationTextArea") as HTMLTextAreaElement).value;

	const resumeContent = `
		<h2>Your Resume</h2><hr style="border: 1px solid #aaaaaa; margin: 10px 0;">
		<h3>Personal Information</h3><hr style="border: 1px solid #333; margin: 10px 0;">
		<p><strong>Job Name:</strong> ${jobName}</p>
	  ${pictureURL ? `<img src="${pictureURL}" alt="Profile Picture" style="width:100px; height:auto; border-radius:50%; display:block; margin:10px 0;" />` : ""}
		<p><strong>First Name:</strong> ${firstName}</p>
		<p><strong>Last Name:</strong> ${lastName}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Address:</strong> ${address}</p>
		<p><strong>Country:</strong> ${country}</p>
		<p><strong>City:</strong> ${city}</p>
		<p><strong>Phone Number:</strong> ${phone}</p>

		<h3>Work Experience</h3><hr style="border: 1px solid #aaaaaa; margin: 10px 0;">
		<p><strong>Company Name:</strong> ${companyName}</p>
		<p><strong>Last Job:</strong> ${yourLastJob}</p>
		<p><strong>Job Description:</strong> ${jobDescription}</p>

		<h3>Skills</h3><hr style="border: 1px solid #aaaaaa; margin: 10px 0;">
		<ul>${skills}</ul>

		<h3>Education</h3><hr style="border: 1px solid #aaaaaa; margin: 10px 0;">
		<p><strong>Institute Name:</strong> ${instituteName}</p>
		<p><strong>Degree:</strong> ${degree}</p>
		<p><strong>Years of Education:</strong> ${yearsOfEducation}</p>
		<p><strong>Education Description:</strong> ${educationDescription}</p>
	`;

	
	resumePreviewElement.innerHTML = resumeContent;
});

