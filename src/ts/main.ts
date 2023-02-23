const menuButton = document.querySelector('.toggleMenu') as HTMLButtonElement;
const menuUl = document.querySelector('.menuLinks') as HTMLUListElement;
let menuOpen: boolean = false;

menuButton.addEventListener('click', toggleMenu);
    const listItemLinks = document.querySelectorAll('.listItem');
    listItemLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

function toggleMenu(): void {
    menuOpen = !menuOpen;
    if (!menuOpen) {
    menuButton.blur(); 
    }
    if (menuOpen) {
    menuButton.classList.add('active');
    menuUl.classList.add('active');
    } else {
    menuButton.classList.remove('active');
    menuUl.classList.remove('active');
    }
    menuButton.setAttribute('aria-expanded', 'true');
};

function closeMenu(): void {
    menuOpen = false;
    menuButton.blur();
    menuButton.classList.remove('active');
    menuUl.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
}
