const carouselRow = document.getElementById("carousel-row");

let recipes = [
  {
    id: 1,
    title: "Kurkkua lautasella",
    content:
      "Lohko neljä suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/kurkkuja-kupissa.jpg",
  },
  {
    id: 2,
    title: "Kurkkua ja leipää",
    content:
      "Lohko neljä suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/testataan-etusivua-taas.jpeg",
  },
  {
    id: 3,
    title: "Kurkkua kupissa",
    content:
      "Lohko neljä suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/123.jpg",
  },
  {
    id: 4,
    title: "Kurkkua lautasella",
    content:
      "Lohko neljä suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/123.jpg",
  },

];

renderRecipes();

function renderRecipes() {
  let recipeCard = "";

  

  recipes.forEach(recipe => {
    console.log(recipe.id)
    if (recipe.id <= 1) {

    recipeCard += 
      `<div class="carousel-item active size-test" id="${recipe.id}">
      <div class="card img-wrapper-reseptit">
        <img
          src=${recipe.img}
          alt="Kurkkua ja leipää"
          class="card-img-top resepti-card-img"
        />
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">
            ${recipe.content}
          </p>
          <a href="#" class="btn btn-primary">Suurenna</a>
        </div>
      </div>
    </div>`
      
    } else {
      recipeCard += 
      `<div class="carousel-item size-test" id="${recipe.id}">
      <div class="card img-wrapper-reseptit">
        <img
          src=${recipe.img}
          alt="Kurkkua ja leipää"
          class="card-img-top resepti-card-img"
        />
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">
            ${recipe.content}
          </p>
          <a href="#" class="btn btn-primary">Suurenna</a>
        </div>
      </div>
    </div>`
  
    }
    
  })
  console.log(recipeCard)
 carouselRow.innerHTML = recipeCard;
}
