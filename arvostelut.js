const backgroundImage = document.querySelectorAll(".kurkku")[0];
let profileOpen = false;
const wrapper = document.querySelectorAll(".wrapper")[0];



const reviewBtn = document.getElementById("review-btn");
const reviewDiv = document.querySelector('.review-btn-div');
const reviewCard = document.getElementById("review-card");
const leftSide = document.getElementById("left-side");

const pickleName = document.getElementById("name-field");
const pickleType = document.getElementById("type-field");
const pickleFlavor = document.getElementById("customRange2");
const pickleTexture = document.getElementById("customRange3");
const submitReviewBtn = document.getElementById("submit-review-btn");
const sentMessage = document.getElementById("sent-message");

let uploadedImage;

reviewBtn.addEventListener("click", () => {
  reviewCard.classList.toggle("active");
  reviewDiv.classList.toggle('active');
  reviewBtn.classList.toggle('active');
});




let data = [
  {
    id: 1,
    name: "Villen Rapsakka",
    img: "./images/villen_rapsakat.png",
    tyyli: "Venäläinen suolakurkku",
    maku: 2,
    suuTuntuma: 1,
  },
  {
    id: 2,
    name: "Euro East",
    img: "./images/euro-east-suolakurkku.jpg",
    tyyli: "Lohkottu suolakurkku",
    maku: 3,
    suuTuntuma: 2,
  },
  {
    id: 3,
    name: "Myrttinen",
    img: "./images/myrttisen-valkosipulikurkut.jpg",
    tyyli: "Valkosipulisuolakurkut",
    maku: 5,
    suuTuntuma: 5,
  },
  {
    id: 4,
    name: "Villen Lupsakka",
    img: "./images/villen-lupsakka.jpg",
    tyyli: "Venäläinen suolakurkku",
    maku: 2,
    suuTuntuma: 1,
  },
  {
    id: 5,
    name: "Torkkelin Suolakurkku",
    img: "./images/torkkelin-perhe.jpg",
    tyyli: "Valkosipuliton suolakurkku",
    maku: 4,
    suuTuntuma: 4,
  },
  {
    id: 6,
    name: "Orzech Suolakurkku",
    img: "./images/orzech.jpg",
    tyyli: "Venäläinen suolakurkku",
    maku: 3,
    suuTuntuma: 2,
  },
  {
    id: 7,
    name: "Salvest Suolakurkku",
    img: "./images/salvest.jpg",
    tyyli: "Venäläinen suolakurkku",
    maku: 2,
    suuTuntuma: 4,
  },
  {
    id: 8,
    name: "Myrttisen Suolakurkku",
    img: "./images/myrttinen-suolakurkku.jpg",
    tyyli: "Valkosipuliton suolakurkku",
    maku: 5,
    suuTuntuma: 5,
  },
  {
    id: 9,
    name: "Marjax",
    img: "./images/marjax.jpg",
    tyyli: "Venäläinen suolakurkku",
    maku: 4,
    suuTuntuma: 4,
  },
];

const savedData = JSON.parse(localStorage.getItem("data"));
if (savedData != null) {
  data = savedData;
}

renderReviews();

submitReviewBtn.addEventListener("click", () => {
  addNewReview();
});

function renderReviews() {
  let cards = " ";

  data.forEach((item) => {
  
    cards += `
  <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
      <div class="img-wrapper">
      <img class="w-100 arvostelu-img" src="${
        item.img
      }" alt="" style="width: 100%; height: 100%;">
      </div>
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <h4 class="card-title" style="font-size: 15px;font-weight:600;">${
                    item.name
                  }</h4>
                  <h4 style="font-weight:600;font-size: 15px;"><i class="fa-solid fa-star text-warning mx-2"></i>${
                    (item.maku + item.suuTuntuma) / 2
                  } / 5 </h4>
              </div>
              <p class="card-text">${item.tyyli}</p>
              <button class="btn btn-primary open-button" onclick="profile(${
                item.id
              })">Suurenna</button>
          </div>
      </div>
  </div>
  `;

    const panel = document.getElementById("panel");
    panel.innerHTML = cards;
  });
}
const profileCard = document.getElementById("profile");

function profile(id) {
  profileCard.innerHTML = " ";
  profileCard.style.transform = "scale(1)";
  profileCard.style.opacity = 1;
  panel.style.opacity = 0.5;
  backgroundImage.style.transform = "scale(1)";
  profileOpen = true;

  data.forEach((item) => {
    if (item.id === id) {
      let profile_div = `
              <div class="w-100 small-screen-margin">
                  <span id="close-button" class="close float-end" onclick="closeProfile()">&times</span>
              </div>
              <div class="col-md-3 border-end p-4" id="kuvakorttiboksi">

  <img class="w-100" src="${item.img}" alt="" id="profile-img">
  <div class="">
      <h2 style="font-size: 20px;" class="display-6 text-center small-profile">${
        item.name
      }</h4>
      <p class="card-text text-center">(${item.tyyli})</p>
  </div>
</div>
<div class="col-md-9">
  <h3 class="display-6 mt-2" style="font-size: 30px;letter-spacing:1.5px;">ARVOSANA</h3><span>${
    (item.maku + item.suuTuntuma) / 2
  } / 5</span>
  <div class="progress">
      <div class="progress-bar" style="width:${
        ((item.maku + item.suuTuntuma) / 2 / 5) * 100
      }%"></div>
  </div>
  <h2 class="display-6 mt-2" style="font-size: 30px;letter-spacing:1.5px;">MAKU</h2>
  <span>${item.maku} / 5</span>
  <div class="progress">
      <div class="progress-bar" style="width:${(item.maku / 5) * 100}%"></div>
  </div>
  <h2 class="display-6 my-2" style="font-size: 30px;letter-spacing:1.5px;">SUUTUNTUMA</h2>
  <span>${item.suuTuntuma} / 5</span>
  <div class="progress">
      <div class="progress-bar" style="width:${
        (item.suuTuntuma / 5) * 100
      }%"></div>
  </div>
</div>
      `;

      profileCard.innerHTML = profile_div;

    }
  });
}

function closeProfile() {
  profileCard.style.transform = "scale(0)";
  profileCard.style.opacity = 0;
  panel.style.opacity = 1;
}

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;

    document.querySelector(
      ".img-placeholder"
    ).style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});

function addNewReview() {
  console.log(uploadedImage);
  if (uploadedImage === undefined) {
    uploadedImage = "./images/ei-kuvaa-kurkku.jpg";
  }
  let newId = data.length + 1;
  const newPickle = {
    id: newId,
    name: pickleName.value,
    img: uploadedImage,
    tyyli: pickleType.value,
    maku: parseInt(pickleFlavor.value),
    suuTuntuma: parseInt(pickleTexture.value),
  };

  if (pickleName.value != "" && pickleType.value != "") {
    data.push(newPickle);
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    renderReviews();
    pickleType.value = "";
    pickleName.value = "";
    newId++;

    reviewCard.innerHTML =
      "<h1>Kiitos!</h1><button class='btn text-white' id='write-new-btn'>Sulje</button>";
    const writeNew = document.getElementById("write-new-btn");
    if (writeNew) {
      writeNew.addEventListener("click", () => {
        window.location.reload();
      });
    }
  } else {
    alert("Täytä molemmat kentät");
  }
}
