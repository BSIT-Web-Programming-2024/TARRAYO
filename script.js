
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});


const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', (e) => {
    let valid = true;

  
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (!valid) {
        e.preventDefault(); 
        alert('Please fill out all fields.');
    }
});


const sections = document.querySelectorAll('section');

function checkVisibility() {
    const windowHeight = window.innerHeight;
    const windowTop = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

       
        if (sectionTop <= windowTop + windowHeight - 150 && sectionTop + sectionHeight >= windowTop + 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); 
