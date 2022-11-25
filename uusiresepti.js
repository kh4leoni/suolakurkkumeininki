const newRecipeBtn = document.getElementById("send-new-recipe-btn");
const textFields = document.querySelectorAll(".new-recipe");
const textArea = document.getElementById("exampleFormControlTextarea1");
const recipeTitle = document.getElementById('new-recipe-title');

newRecipeBtn.addEventListener("click", () => {

  if (textArea.value != '' && recipeTitle.value != '') {
  textFields[0].innerHTML = `
  
  <div class="thank-you-message">
  <h1 style="color:white; font-size:50px; opacity: 100%; z-index: 15;">Kiitos!</h1>
  <p style="color:white; z-index: 15; font-size: 25px; padding: 0 35px;">Resepti on lähetetty ylläpidon tarkasteltavaksi. Resepti lisätään sivuille, mikäli se läpäisee seulan.</p>
  <a href="./reseptit.html" class="btn btn-primary new-recipe-btn" style="font-size:14px; width="300px;">Palaa resepteihin</a>
   </div>
  `;
  } else {
    alert('Täytä kaikki kentät!')
  }
});
