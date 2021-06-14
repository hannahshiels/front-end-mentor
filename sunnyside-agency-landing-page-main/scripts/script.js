const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav-container');

btn.addEventListener('click', expandMenu);

function expandMenu() {
    nav.classList.toggle('active');
}