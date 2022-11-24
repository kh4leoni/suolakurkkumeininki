const carouselRow = document.getElementById("carousel-row");
const recipeModal = document.getElementById("recipe-modal");
const carousel = document.querySelector(".carousel");
const left = document.querySelector(".left");
const clickable = document.querySelector(".clickable");

let recipes = [
  {
    id: 1,
    title: "Suolakurkkunuotio",
    content:
      "Ota purkista vähintään viisi pienehköä suolakurkkua. Aseta ne neliön muotoiselle lautaselle nuotion kaltaiseen asetelmaan. Tulitikut voit kuitenkin säästää, sillä tämä nuotio menee suorinta tietä herkkusuuhun.",
    img: "./images/kurkkukokko.jpg",
  },
  {
    id: 2,
    title: "Suolakurkkua lautasella",
    content:
      "Puolita kaksi suolakurkkua pitkittäin ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/kurkkuja-lautasella.jpg",
  },
  {
    id: 3,
    title: "Suolakurkkua, leipää ja kanaa",
    content:
      "Siivuta läjä suolakurkkuja pitkittäin. Ota esiin sopivan iso puutarjotin. Asettele annoksen tähti keskelle puualustaa ja laita toiselle sivulle hyvin kypsytettyä kananlihaa ja toiselle puolelle täysjyväleipää.",
    img: "./images/123.jpg",
  },
  {
    id: 4,
    title: "Suorakurkut lohkoina",
    content:
      "Lohko suolakurkut neljään osaan ja laske ne varovasti mielellään pyöreän muotoiselle lautaselle keoksi. Älä jää ihailemaan kekoa liian pitkäksi aikaa, vaan asettele lohkot yksitellen suuhusi.",
    img: "./images/suolakurkkulohkot.jpg",
  },
];

renderRecipes();

function renderRecipes() {
  let recipeCard = "";

  recipes.forEach((recipe) => {
    if (recipe.id <= 1) {
      recipeCard += `
    <div class="carousel-item active" id="${recipe.id}">
    <div class="card">
    <div id="carousel-slide${recipe.id}">
    </div>
    
    <div class="card-body card-recipe">
  <h5 class="card-title">${recipe.title}</h5>
   <p class="card-text">
     ${recipe.content.substring(0, 80)}...
   </p>
   <button class="btn btn-primary recipe-card-btn" id="info-button${
     recipe.id
   }"><a class="modal-a" href="#">Suurenna</a></button>
 </div>
    </div>
    </div>
    
    
    `;
    } else {
      recipeCard += `
      <div class="carousel-item" id="${recipe.id}">
      <div class="card">
      <div id="carousel-slide${recipe.id}">
      </div>      
      <div class="card-body card-recipe">
    <h5 class="card-title">${recipe.title}</h5>
     <p class="card-text">
       ${recipe.content.substring(0, 80)}...
     </p>
     <button class="btn btn-primary recipe-card-btn" id="info-button${
       recipe.id
     }"><a class="modal-a" href="#">Suurenna</a></button>
   </div>
   
      </div>
      </div>
      
      
      `;
    }
  });

  carouselRow.innerHTML = recipeCard;
}

const infoBtns = document.querySelectorAll(".recipe-card-btn");

infoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    recipeModal.classList.toggle("active");
    clickable.classList.toggle("active");
    carousel.style.opacity = 0.4;
    carousel.style.transition = "0.4s";
    btn.style.pointerEvents = "none";

    clickable.addEventListener("click", () => {
      carousel.style.opacity = 1;
      recipeModal.classList.remove("active");
      clickable.classList.remove("active");
      btn.style.pointerEvents = "auto";
    });

    openRecipe(btn.id);
  });
});

left.addEventListener("click", () => {
  if (recipeModal.classList.contains("active")) {
    recipeModal.classList.remove("active");
  }
});

function openRecipe(id) {
  recipes.forEach((recipe) => {
    if (`info-button${recipe.id}` === id) {
      let infoDiv = `<div class="modal-container">
      <div class="modal-header">
      
      <div>
        <h3 class="modal-title">${recipe.title}</h3>
      </div>
      <div class="info-img-wrapper">
      <img class="info-img" src=${recipe.img}>
      </div>
        </div>
      </div>
      <div class="modal-content">
        <p class="modal-text-content">${recipe.content}</p>
      </div>
    </div>`;

      recipeModal.innerHTML = infoDiv;
    }
  });
}

