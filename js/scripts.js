var currentYearSpan = document.getElementById("currentYear");

function locate_assign() {
	document.location.assign("/");
	}
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.header__menu');
	
	header__burger.addEventListener('click', function(){
		header__burger.classList.toggle('active');
		header__menu.classList.toggle('active');
	})

function adclick() {
	document.location.assign("https://trapsuperplay.creator-spring.com/")
}

function toggleDiv() {
    var div = document.getElementById("toggleDiv");
    var body = document.getElementsByTagName("body")[0];

    var isDivVisible = localStorage.getItem('isDivVisible');

    if (isDivVisible === 'true') {
        div.style.display = "none";
        body.classList.remove("no-scroll");
        localStorage.setItem('isDivVisible', 'false');
    } else {
        div.style.display = "block";
        body.classList.add("no-scroll");
        localStorage.setItem('isDivVisible', 'true');
    }
}

window.onload = function() {
    var div = document.getElementById("toggleDiv");
    var isDivVisible = localStorage.getItem('isDivVisible');

    if (isDivVisible === 'true') {
        div.style.display = "block";
        body.classList.add("no-scroll");
    } else {
        div.style.display = "none";
        body.classList.remove("no-scroll");
    }
};

function validateEmail() {
	let formEmail = document.getElementById('formEmail').value;
	let emailValid = document.getElementById('emailValid');
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (formEmail.match(pattern)) {
		emailValid.innerHTML = "Your Email Address is Valid!";
		emailValid.style.color = "#4caf50";
		return true;
	} else {
		emailValid.innerHTML = "Please Enter a Valid Email Address.";
		emailValid.style.color = "#f44336";
		return false;
	}
}

function validateFullName() {
	let formName = document.getElementById('formName').value;
	let nameValid = document.getElementById('nameValid');

	if (formName.length > 0 && /^[a-zA-Z]+$/.test(formName)) {
		nameValid.innerHTML = "Full Name is Valid!";
		nameValid.style.color = "#4caf50";
		return true;
	} else {
		nameValid.innerHTML = "Please Enter a Valid Full Name.";
		nameValid.style.color = "#f44336";
		return false;
	}
}

function validateMessage() {
	let formMessage = document.getElementById('formMessage').value;
	let messageValid = document.getElementById('messageValid');

	if (formMessage.length >= 10) {
		messageValid.innerHTML = "Message is Valid!";
		messageValid.style.color = "#4caf50";
		return true;
	} else {
		messageValid.innerHTML = "Message must be at least 10 characters.";
		messageValid.style.color = "#f44336";
		return false;
	}
}

function validateForm(event) {
	event.preventDefault();

	let isEmailValid = validateEmail();
	let isFullNameValid = validateFullName();
	let isMessageValid = validateMessage();

	if (isEmailValid && isFullNameValid && isMessageValid) {
		grecaptcha.ready(function () {
			grecaptcha.execute('6LceaDoqAAAAAAGrZGDgFbebS47L_2AjBEZ1KiC3', { action: 'submit' }).then(function (token) {
				if (token) {
					alert("Captcha passed. Sending the form...");
					document.getElementById('contact-form').submit();
				} else {
					alert("Captcha failed. Please try again.");
				}
			});
		});
	} else {
		alert("Please fill out the form correctly.");
	}
}


var currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;