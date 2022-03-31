window.onload = function () {
    var signUpForm = document.getElementById("signUpForm");

	signUpForm.addEventListener('submit', (event) => {
		// stop form submission
		event.preventDefault();
		
		window.location = "login.html";
	});
};