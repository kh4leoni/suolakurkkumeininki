const menuButton = document.getElementsByClassName("toggle-button")[0];
const navLink = document.getElementsByClassName("nav-link-div")[0];
const newNavLink = document.getElementsByClassName("new-navi-div")[0];

const searchButton = document.getElementById("search-button");
const searchField = document.getElementsByClassName("search-field")[0];
const submitSearchBtn = document.getElementById('search-btn-submit');



//Search bar



//hamburger menu



openNavBar();


if (searchButton) {
openSearchBar();
}

function openNavBar() {
  menuButton.addEventListener('click', () => {
    if (navLink) {
      navLink.classList.toggle('active')
    } else if (newNavLink) {
      newNavLink.classList.toggle('active');
    }
  })
}

function openSearchBar() {
  searchButton.addEventListener('click', () => {
    searchField.classList.toggle('active');

    submitSearchBtn.classList.toggle('active');
    
  })
}
