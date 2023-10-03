window.addEventListener('scroll', reveal)

function reveal() {
    let sections = document.querySelectorAll('.reveal'); 
    
    for(let i = 0; i < sections.length; i++){
        let windowHeight = window.innerHeight; 
        let revealTop = sections[i].getBoundingClientRect().top;
        let revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint){
            sections[i].classList.add('active'); 
        }
        else {
            sections[i].classList.remove('active'); 
        }
    }
}

/*
    SLIDESHOW FUNCTIONALITY 
*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// cycles through slides 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

////////////////////////////////////////////////
// Figure out how to fix this later 
////////////////////////////////////////////////

let newSlideIndex = 1;
showSlidesNew(newSlideIndex);

// Next/previous controls
function plusSlidesNew(n) {
  showSlidesNew(newSlideIndex += n);
}

// Thumbnail image controls
function currentSlideNew(n) {
  showSlidesNew(newSlideIndex = n);
}

// cycles through slides 
function showSlidesNew(n) {
  let i;
  let slides = document.getElementsByClassName("slideNew");
  let dots = document.getElementsByClassName("dotNew");
  if (n > slides.length) {newSlideIndex = 1}
  if (n < 1) {newSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[newSlideIndex-1].style.display = "block";
  dots[newSlideIndex-1].className += " active";
}