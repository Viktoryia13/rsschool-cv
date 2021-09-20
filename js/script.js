
const menuButton = document.querySelector('.navbar-toggler');

menuButton.addEventListener('click', function () {
    const menu = document.querySelector('.navbar-nav');
    menu.classList.toggle("show");
})

hljs.initHighlightingOnLoad();