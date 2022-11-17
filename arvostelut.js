const backgroundImage = document.querySelectorAll('.kurkku')[0];
let profileOpen = false;
const wrapper = document.querySelectorAll('.wrapper')[0];


let data = [
  { id: 1, name: 'Villen Rapsakat', img: './images/villen_rapsakat.png', tyyli: 'Venäläinen suolakurkku', arvosana: 1.5, maku: 40, suuTuntuma: 10 },
  { id: 2, name: 'Euro East', img: './images/euro-east-suolakurkku.jpg', tyyli: 'Lohkottu suolakurkku', arvosana: 3, maku: 71, suuTuntuma: 77 },
  { id: 3, name: 'Myrttinen', img: './images/myrttisen-valkosipulikurkut.jpg', tyyli: 'Valkosipulisuolakurkut', arvosana: 5, maku: 100, suuTuntuma: 100 },
  { id: 1, name: 'Villen Rapsakat', img: './images/villen_rapsakat.png', tyyli: 'Venäläinen suolakurkku', arvosana: 1.5, maku: 40, suuTuntuma: 10 },
  { id: 2, name: 'Euro East', img: './images/euro-east-suolakurkku.jpg', tyyli: 'Lohkottu suolakurkku', arvosana: 3, maku: 71, suuTuntuma: 77 },
  { id: 3, name: 'Myrttinen', img: './images/myrttisen-valkosipulikurkut.jpg', tyyli: 'Valkosipulisuolakurkut', arvosana: 5, maku: 100, suuTuntuma: 100 },
  { id: 2, name: 'Euro East', img: './images/euro-east-suolakurkku.jpg', tyyli: 'Lohkottu suolakurkku', arvosana: 3, maku: 71, suuTuntuma: 77 },
  { id: 3, name: 'Myrttinen', img: './images/myrttisen-valkosipulikurkut.jpg', tyyli: 'Valkosipulisuolakurkut', arvosana: 5, maku: 100, suuTuntuma: 100 },

]



let cards = " ";

data.forEach((item) => {
  cards += `
  <div class="col-12 col-md-6 col-lg-4"s>
      <div class="card">
          <img class="w-100" src="${item.img}" alt="">
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <h4 class="card-title" style="font-size: 15px;font-weight:600;">${item.name}</h4>
                  <h4 style="font-weight:600;font-size: 15px;"><i class="fa-solid fa-star text-warning mx-3"></i>${item.arvosana} / 5 </h4>
              </div>
              <p class="card-text">${item.tyyli}</p>
              <button class="btn btn-primary w-100" onclick="profile(${item.id})">Suurenna</button>
          </div>
      </div>
  </div>
  `;
});



const panel = document.getElementById("panel");
panel.innerHTML = cards;
const profileCard = document.getElementById("profile");

function profile(id) {
  profileCard.innerHTML = " ";
  profileCard.style.transform = "scale(1)";
  profileCard.style.opacity = 1;
  panel.style.opacity = 0.5;
  backgroundImage.style.transform = "scale(1)";
    profileOpen = true;
    console.log(profileOpen)
 
  data.forEach((item) => {
      if (item.id === id) {
          let profile_div = `
              <div class="w-100">
                  <span id="close-button" class="close float-end" onclick="closeProfile()">&times</span>
              </div>
              <div class="col-md-3 border-end p-4">

  <img class="w-100" src="${item.img}" alt="">
  <div class="">
      <h2 style="font-size: 20px;" class="display-6 text-center small-profile">${item.name}</h4>
      <p class="card-text text-center">(${item.tyyli})</p>
  </div>
</div>
<div class="col-md-9">
  <h3 class="display-6 mt-2" style="font-size: 30px;letter-spacing:1.5px;">ARVOSANA</h3> <span>${item.arvosana} / 5</span>
  <div class="progress">
      <div class="progress-bar" style="width:${(item.arvosana / 5) * 100}%"></div>
  </div>
  <h2 class="display-6 mt-2" style="font-size: 30px;letter-spacing:1.5px;">MAKU</h2>
  <span>${item.maku} / 100</span>
  <div class="progress">
      <div class="progress-bar" style="width:${(item.maku / 100) * 100}%"></div>
  </div>
  <h2 class="display-6 my-2" style="font-size: 30px;letter-spacing:1.5px;">SUUTUNTUMA</h2>
  <span>${item.suuTuntuma} / 100</span>
  <div class="progress">
      <div class="progress-bar" style="width:${(item.suuTuntuma / 100 ) * 100}%"></div>
  </div>
</div>
      `;

            
          profileCard.innerHTML = profile_div;
          const closeBtn = document.getElementById('close-button');
          const checkClick = closeBtn.addEventListener('click', () => {});
          
          wrapper.addEventListener('click', () => {
            console.log(checkClick)
          })

      }
  })

}



function closeProfile(){
  profileCard.style.transform = "scale(0)";
  profileCard.style.opacity = 0;
  panel.style.opacity = 1; 

}