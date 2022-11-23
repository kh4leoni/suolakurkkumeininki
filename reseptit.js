
const carouselRow = document.getElementById("carousel-row");
const recipeModal = document.getElementById('recipe-modal');
const carousel = document.querySelector('.carousel')


let recipes = [
  {
    id: 1,
    title: "Suolakurkkunuotio",
    content:
      "Ota purkista vähintään viisi pienehköä suolakurkkua. Aseta ne neliön muotoiselle lautaselle nuotion kaltaiseen asetelmaan. Tulitikut voit kuitenkin säästää, sillä tämä nuotio menee suorinta tietä herkkusuuhun.",
    img: "./images/kurkkukokko.jpeg",
  },
  {
    id: 2,
    title: "Suolakurkkua lautasella",
    content:
      "Puolita kaksi suolakurkkua pitkittäin ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/kurkkuja-lautasella.jpeg",
  },
  {
    id: 3,
    title: "Suolakurkkua, leipää ja possua",
    content:
      "Siivuta läjä suolakurkkuja pitkittäin. Ota esiin sopivan iso puutarjotin. Asettele annoksen tähti keskelle puualustaa ja laita toiselle sivulle hyvin kypsytettyä porsaan lihaa ja toiselle puolelle täysjyväleipää. Sivutuotteet ovat vapaavalintaisia, pääasia että keskellä tarjotinta on suolakurkkua",
    img: "./images/123.jpg",
  },
  {
    id: 4,
    title: "Suorakurkut lohkoina",
    content:
      "Lohko suolakurkut neljään osaan ja laske ne varovasti mielellään pyöreän muotoiselle lautaselle keoksi. Älä jää ihailemaan kekoa liian pitkäksi aikaa, vaan asettele lohkot yksitellen suuhusi.",
    img: "./images/1234.jpg",
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
   }">Suurenna</button>
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
     }">Suurenna</button>
   </div>
   
      </div>
      </div>
      
      
      `;
    }
  });

  carouselRow.innerHTML = recipeCard;
}

const infoBtns = document.querySelectorAll(".recipe-card-btn");

infoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    recipeModal.classList.toggle('active')
    console.log(recipeModal.classList)
    if (btn.innerHTML === 'Sulje') {
      btn.innerHTML = 'Suurenna'
      carousel.style.opacity = 1;
    } else {
      btn.innerHTML = 'Sulje';
      carousel.style.opacity = 0.4;
      carousel.style.transition = "0.4s";
    }
    
    
    openRecipe(btn.id)
    
   
  
   
  
   
 
  })
})



function openRecipe(id) {
  

  recipes.forEach(recipe => {
    if (`info-button${recipe.id}` === id) {
      let infoDiv = `<div class="modal-container">
      <div class="modal-header">
      <div class="info-img-wrapper">
      <img class="info-img" src=${recipe.img}>
      </div>
      <div>
        <h3 class="modal-title">${recipe.title}</h3>
      </div>
        </div>
      </div>
      <div class="modal-content">
        <p class="modal-text-content">${recipe.content}</p>
      </div>
    </div>`
    
    recipeModal.innerHTML = infoDiv;
    }
    
   
  })

  

}

function closeInfo() {
  btn.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(btn.innerHTML)
      if (btn.innerHTML === 'Sulje') {
        btn.innerHTML = 'Suurenna'
      }
    })
  })
}


// `<div class="carousel-item size-test" id="${recipe.id}">
// <div class="card">
// <div class="img-wrapper-reseptit">
//   <img
//     src=${recipe.img}
//     alt="Kurkkua ja leipää"
//     class="card-img-top resepti-card-img"
//   />
//   </div>
//   <div class="card-body card-recipe">
//     <h5 class="card-title">${recipe.title}</h5>
//     <p class="card-text">
//       ${recipe.content}
//     </p>
//     <a href="#" class="btn btn-primary recipe-card-btn">Suurenna</a>
//   </div>
// </div>
// </div>`

// `<div class="carousel-item active size-test" id="${recipe.id}">
// <div class="card">
// <div class="img-wrapper-reseptit">
//   <img
//     src=${recipe.img}
//     alt="Kurkkua ja leipää"
//     class="card-img-top resepti-card-img"
//   />
//   </div>
//   <div class="card-body card-recipe">
//     <h5 class="card-title">${recipe.title}</h5>
//     <p class="card-text">
//       ${recipe.content}
//     </p>
//     <a href="#" class="btn btn-primary recipe-card-btn">Suurenna</a>
//   </div>
// </div>
// </div>`
