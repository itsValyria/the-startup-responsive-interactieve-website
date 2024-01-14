// Slideshow

let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
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

// Number animation

// Throttle the amount of scroll event function calls
const throttle = (fn, delay) => { 
  let time = Date.now(); 
 
  return () => { 
    if((time + delay - Date.now()) <= 0) { 
      fn(); 
      time = Date.now(); 
    } 
  } 
} 

// Set element id's in variables
var corpScore = document.getElementById('corpScore');
var custSatisfaction = document.getElementById('custSatisfaction');
var purpDrivenClients = document.getElementById('purpDrivenClients');

// Calls viewpointcheck when page loads
window.addEventListener('load', callViewPointCheck())

// Calls viewpointcheck when user scrolls
window.addEventListener('scroll', throttle(callViewPointCheck, 200))

// Distrubuter function for load and scroll event listeners, reduces duplicate code
function callViewPointCheck() {
  if (isInViewport(corpScore)) {
    countingAnimation(corpScore.getAttribute('id'))
  }
  if(isInViewport(custSatisfaction)) {
    countingAnimation(custSatisfaction.getAttribute('id'))
  }
  if(isInViewport(purpDrivenClients)) {
    countingAnimation(purpDrivenClients.getAttribute('id'))
  }
}

// Checks if supplied element is within the users viewpoint, returns boolean
function isInViewport(element) {
  var bounding = element.getBoundingClientRect();
  
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      return true;
  } else {
      return false;
  }
}

// Counting animation function
function countingAnimation(elementId) {
  const counter = document.getElementById(elementId);

  const animate = () => {
      const value = + counter.getAttribute("akhi");
      const data = + counter.innerText;
    if(data < value) {
      counter.innerText++;
      setTimeout(animate, 20);
    }else{
      counter.innerText = value;
    }
  }
  
  animate();
}