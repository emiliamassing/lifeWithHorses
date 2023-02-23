const menuButton = document.querySelector('.toggleMenu') as HTMLButtonElement;
const menuUl = document.querySelector('.menuLinks') as HTMLUListElement;
let menuOpen: boolean = false;

function toggleMenu(): void {
    menuOpen = !menuOpen; //Gör att menyn får värdet true
  if (!menuOpen) {
    menuButton.blur(); // Tar bort fokus från knappen
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
