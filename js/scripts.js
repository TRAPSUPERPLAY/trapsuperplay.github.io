function locate_assign() {
	document.location.assign("https://trapsuperplay.github.io/");
	}
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.header__menu');
	
	header__burger.addEventListener('click', function(){
		header__burger.classList.toggle('active');
		header__menu.classList.toggle('active');
	})

	function locate_contact() {
		document.location.assign("https://docs.google.com/forms/d/e/1FAIpQLScdEuf97O2y0xlMHPdr56-xIXzHCWwca0M--LB8NImD8p9tmw/viewform?usp=sf_link");
	}
	function contanting()
	{
		document.location.assign("contact/");
	}
