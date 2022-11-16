const searchButton = document.getElementById("search-button");
const searchField = document.getElementsByClassName("search-field")[0];


searchButton.addEventListener('click', () => {
  searchField.classList.toggle('active');
})

// openSearchBar();

// function openSearchBar() {
//   searchButton.addEventListener('click', () => {
//     searchField.classList.toggle('active');
    
//   })
// }

