let slideIndex = 0;
let autoSlideTimeout;

function setSlideHeight() {
  const slides = document.getElementsByClassName("mySlides");
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  for (let i = 0; i < slides.length; i++) {
    slides[i].querySelector("img").style.height = isPortrait ? "30vh" : "650px";
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Reset the slide index if out of bounds
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and add active class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Clear the previous timeout and set a new one for automatic sliding
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(() => plusSlides(1), 5000); // Change slide every 5 seconds
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Start the slideshow
showSlides(slideIndex = 1);

// Set the initial slide height
setSlideHeight();

// Add an event listener for orientation changes
window.addEventListener("resize", setSlideHeight);
