const modal = document.querySelector("#myModal");

let smallsImgs = document.querySelectorAll(".smallImg");

const bigImg = document.querySelector(".modal-content img");

for (let i = 0; i < smallsImgs.length; i++) {
  smallsImgs[i].addEventListener("click", () => {
    let smallImgSrc = smallsImgs[i].src.split("/").pop();
    bigImg.src = `./assets/copy_${smallImgSrc}`;
    modal.style.display = "block";
  });
}

// smallsImgs = [...smallsImgs];

// smallsImgs.map((smallImg) => {
//   smallImg.addEventListener("click", () => {
//     let smallImgSrc = smallImg.src.split("/").pop();
//     console.log(smallImgSrc);
//     bigImg.src = `./assets/copy_${smallImgSrc}`;
//     modal.style.display = "block";
//   });
// });

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
