const carouselRow = document.getElementById("carousel-row");

let recipes = [
  {
    id: 2,
    title: "Suolakurkkua lautasella",
    content:
      "Lohko kaksi suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/kurkkuja-lautasella.jpeg",
  },
  {
    id: 1,
    title: "Suolakurkkunuotio",
    content:
      "Ota purkista vähintään viisi pienehköä suolakurkkua. Aseta ne neliön muotoiselle lautaselle nuotion kaltaiseen asetelmaan. Tulitikut voit kuitenkin säästää, sillä tämä nuotio menee suorinta tietä herkkusuuhun.",
    img: "./images/kurkkukokko.jpeg",
  },
  {
    id: 3,
    title: "Suolakurkkua, leipää ja possua",
    content:
      "Lohko neljä suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/123.jpg",
  },
  {
    id: 4,
    title: "Pötkö pöydällä",
    content:
      "Lohko neljä suolakurkkua ja asettele ne valkoiselle lautaselle. Nauti välittömästi.",
    img: "./images/1234.jpg",
  },

];

renderRecipes();

function renderRecipes() {
  let recipeCard = "";

  

  recipes.forEach(recipe => {
    console.log(recipe.id)
    if (recipe.id <= 1) {
    recipeCard += `
    <div class="carousel-item active size-test" id="${recipe.id}">
    <div class="card">
    <div id="carousel-slide${recipe.id}">
    </div>
    
    <div class="card-body card-recipe">
  <h5 class="card-title">${recipe.title}</h5>
   <p class="card-text">
     ${recipe.content.substring(0,100)}...
   </p>
   <a href="#" class="btn btn-primary recipe-card-btn">Suurenna</a>
 </div>
    </div>
    </div>
    
    
    `
  
      
    } else {
      recipeCard += `
      <div class="carousel-item" id="${recipe.id}">
      <div class="card">
      <div id="carousel-slide${recipe.id}">
      </div>
      
      <div class="card-body card-recipe">
    <h5 class="card-title">${recipe.title}</h5>
     <p class="card-text">
       ${recipe.content.substring(0,100)}...
     </p>
     <a href="#" class="btn btn-primary recipe-card-btn">Suurenna</a>
   </div>
      </div>
      </div>
      
      
      `

  
    }
    
  })
  console.log(recipeCard)
 carouselRow.innerHTML = recipeCard;
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