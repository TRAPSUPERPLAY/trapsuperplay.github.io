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
function sends(event) {
		event.preventDefault();
		
		grecaptcha.enterprise.ready(function() {
			grecaptcha.enterprise.execute('6LermDkqAAAAAM4eo5m47j_0tn4O-cAaJ8_82YzX', {action: 'submit'}).then(function(token) {
				document.getElementById('g-recaptcha-response').value = token;

				alert("Captcha passed. Sending the form...");

				document.getElementById('contact-form').submit();
			});
		});
}
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



function validate(){
	let form = document.getElementById('form');
	let formEmail = document.getElementById('formEmail').value;
	let textvalid = document.getElementById('textvalid');
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if(formEmail.match(pattern))
	{
		textvalid.innerHTML = "Your Email Address is Valid!";
		textvalid.style.color = "#4caf50";
	}
	else
	{
		textvalid.innerHTML = "Please Enter Valid Email Address.";
		textvalid.style.color = "#f44336";
	}
}


var currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;