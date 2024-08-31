// Theme switch initialization
function initTheme() {
    const themeSwitch = document.getElementById('theme-switch-checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'day') {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener('change', function(event) {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'day');
            localStorage.setItem('theme', 'day');
        } else {
            document.documentElement.setAttribute('data-theme', 'night');
            localStorage.setItem('theme', 'night');
        }
    });
}

// Menu toggle and active link highlighting
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Initialize the theme and functionalities
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});
