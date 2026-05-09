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

const contactForm = document.getElementById('contact-form');
const formToast = document.getElementById('form-toast');
let toastTimer;

function showToast(message, type) {
    if (!formToast) {
        return;
    }

    formToast.textContent = message;
    formToast.className = ['toast', 'show', type].filter(Boolean).join(' ');
    formToast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        formToast.classList.remove('show');
    }, 5000);
}

async function submitContactForm(event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const submitButton = contactForm.querySelector('[type="submit"]');
    const defaultButtonText = submitButton ? submitButton.textContent : '';

    if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
    }

    showToast('Sending message...');

    try {
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const data = await response.json().catch(() => null);
            const errorMessage = data?.errors?.map(error => error.message).join(' ')
                || data?.error
                || 'Something went wrong. Please try again.';
            throw new Error(errorMessage);
        }

        contactForm.reset();
        if (emailValidationMessage) {
            emailValidationMessage.textContent = '';
            emailValidationMessage.className = 'form__validation';
        }
        showToast('Message sent successfully!', 'success');
    } catch (error) {
        showToast(error.message || 'Something went wrong. Please try again.', 'error');
    } finally {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = defaultButtonText;
        }
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', submitContactForm);
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

// console.log("TRAP SUPER PLAY Website Loaded");
