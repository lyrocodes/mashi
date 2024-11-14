let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Navbar
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

// REmove menu and search icon on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// Header ANimation
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});
const phrases = ["Look", "Be"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    document.getElementById('dtext').innerHTML = currentPhrase.join("");

    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            document.getElementById('dtext').innerHTML = currentPhrase.join("");
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            document.getElementById('dtext').innerHTML = currentPhrase.join("");
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();

// Get the popup and the content box
const popup = document.getElementById('contact-popup');
const popupContent = document.querySelector('.popup-content');

// Function to open the popup
function openContactPopup() {
    popup.style.display = 'flex';
}

// Function to close the popup
function closeContactPopup() {
    popup.style.display = 'none';
}

// Close the popup if the user clicks outside the content box
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        closeContactPopup();
    }
});

// Optional: Close the popup when the close icon is clicked (just in case)
document.querySelector('.close-btn').addEventListener('click', closeContactPopup);

