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

let slideIndexA = 0;
showSlidesAuto();

// automates slideshow elements 
function showSlidesAuto() {
  let iA;
  let slidesA = document.getElementsByClassName("slide");
  let dotsA = document.getElementsByClassName("dot");
  for (iA = 0; iA < slidesA.length; iA++) {
    slidesA[iA].style.display = "none";  
  }
  slideIndexA++;
  if (slideIndexA > slidesA.length) {slideIndexA = 1}    
  for (iA = 0; iA < dotsA.length; iA++) {
    dotsA[iA].className = dotsA[iA].className.replace(" active", "");
  }
  slidesA[slideIndexA-1].style.display = "block";  
  dotsA[slideIndexA-1].className += " active";
  setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}
