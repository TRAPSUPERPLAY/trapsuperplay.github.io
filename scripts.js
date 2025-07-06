const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.classList.add('no-scroll');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        if (!document.getElementById('merch-modal').classList.contains('show-modal')) {
            document.body.classList.remove('no-scroll');
        }
    });
}

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
    if (!document.getElementById('merch-modal').classList.contains('show-modal')) {
        document.body.classList.remove('no-scroll');
    }
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

const emailInput = document.getElementById('formEmail');
const emailValidationMessage = document.getElementById('email-validation-message');

function validateEmail() {
    const email = emailInput.value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailValidationMessage.textContent = "";
        emailValidationMessage.className = 'form__validation';
    } else if (email.match(pattern)) {
        emailValidationMessage.textContent = "Email format is valid!";
        emailValidationMessage.className = 'form__validation valid';
    } else {
        emailValidationMessage.textContent = "Please enter a valid email address.";
        emailValidationMessage.className = 'form__validation invalid';
    }
}

if(emailInput) {
    emailInput.addEventListener('keyup', validateEmail);
}

const modal = document.getElementById('merch-modal');
const merchLink = document.getElementById('merch-link');
const modalClose = document.getElementById('modal-close');

function showModal() {
    if(modal) {
        modal.classList.add('show-modal');
        document.body.classList.add('no-scroll');
    }
}

function closeModal() {
    if(modal) {
        modal.classList.remove('show-modal');
        if (!navMenu.classList.contains('show-menu')) {
            document.body.classList.remove('no-scroll');
        }
    }
}

if (merchLink) {
    merchLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show-modal')) {
        closeModal();
    }
});

const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const adImage = document.getElementById('ad-image');
if (adImage) {
    adImage.addEventListener('click', () => {
        window.open('https://trapsuperplay.creator-spring.com/', '_blank');
    });
}

console.log("TRAP SUPER PLAY Website Loaded");