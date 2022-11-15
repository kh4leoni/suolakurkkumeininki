const menuButton = document.getElementsByClassName("toggle-button")[0];
const navLink = document.getElementsByClassName("nav-link-div")[0];
const newNavLink = document.getElementsByClassName("new-navi-div")[0];

menuButton.addEventListener("click", () => {
  if (navLink) {
    navLink.classList.toggle("active");
  } else if (newNavLink) {
    newNavLink.classList.toggle("active");
    console.log(newNavLink);
  }
});
