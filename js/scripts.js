function locate_assign() {
	document.location.assign("https://trapsuperplay.github.io/");
	}
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.header__menu');
	
	header__burger.addEventListener('click', function(){
		header__burger.classList.toggle('active');
		header__menu.classList.toggle('active');
	})
function sends() {
	alert("But before you send, you need to pass the captcha.");
}
function adclick() {
	document.location.assign("https://trapsuperplay.creator-spring.com/")
}

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
