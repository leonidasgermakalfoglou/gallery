// Add the exact filenames of your photographs below.
// Keep every photograph inside the images folder.
// Example: "images/001.jpg"
const images = [
  // "images/LGK_DOC_1.jpg",
  // "images/LGK_DOC_2.jpg",
  // "images/LGK_DOC_3.jpg",
// "images/LGK_DOC_4.jpg",
// "images/LGK_DOC_5.jpg",
// "images/LGK_DOC_6.jpg",
// "images/LGK_DOC_7.jpg",
// "images/LGK_DOC_8.jpg", 
// "images/LGK_DOC_9.jpg",
];

const imageElement = document.getElementById("gallery-image");
const controlsElement = document.getElementById("gallery-controls");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showImage(index) {
  if (images.length === 0) {
    imageElement.hidden = true;
    imageElement.removeAttribute("src");
    controlsElement.hidden = true;
    return;
  }

  currentIndex = (index + images.length) % images.length;
  controlsElement.hidden = false;
  imageElement.hidden = false;
  imageElement.src = images[currentIndex];
}

imageElement.addEventListener("error", () => {
  imageElement.hidden = true;
  console.error("Could not load gallery image:", imageElement.src);
});

imageElement.addEventListener("load", () => {
  imageElement.hidden = false;
});

previousButton.addEventListener("click", () => {
  showImage(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showImage(currentIndex + 1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showImage(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showImage(currentIndex + 1);
  }
});

showImage(0);
