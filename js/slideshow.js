let slideIndex = 0;
const slides = document.querySelector(".slides").children;
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

function previousSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  moveSlide();
}

function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  moveSlide();
}

function moveSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds