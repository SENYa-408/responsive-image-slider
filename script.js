const image = document.getElementById("main-image");
const imageBlur = document.querySelector(".image-blur");
const arrows = document.querySelectorAll(".arrow-block");

// Array of images
const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

// Get num of image in image.src string `.../imgs/5.jpg`
let imgNum = parseInt(
  image.src.slice(image.src.length - 5, image.src.length - 4)
);

const changeImage = (direction, cur) => {
  if (direction) {
    if (parseInt(imgs[imgs.length - 1].charAt(0)) === cur) {
      image.src = `./imgs/${imgs[0]}`;
      imageBlur.style.backgroundImage = `url("./imgs/${imgs[0]}")`;
    } else {
      image.src = `./imgs/${imgs[cur]}`;
      imageBlur.style.backgroundImage = `url("./imgs/${imgs[cur]}")`;
    }
  } else {
    if (parseInt(imgs[0].charAt(0)) === cur) {
      image.src = `./imgs/${imgs[imgs.length - 1]}`;
      imageBlur.style.backgroundImage = `url("./imgs/${
        imgs[imgs.length - 1]
      }")`;
    } else {
      image.src = `./imgs/${imgs[cur - 2]}`;
      imageBlur.style.backgroundImage = `url("./imgs/${imgs[cur - 2]}")`;
    }
  }
  imgNum = parseInt(
    image.src.slice(image.src.length - 5, image.src.length - 4)
  );
};

arrows[0].addEventListener("click", () => {
  changeImage(false, imgNum);
});

arrows[1].addEventListener("click", () => {
  changeImage(true, imgNum);
});

console.log(image.clientWidth + 200);
console.log();
