// Slideshow

const slideIndexes = {
  'work': 1,
  'people': 1,
  'company': 1,
  'planet': 1,
};
for (const slide of Object.keys(slideIndexes)) {
  showSlides(slide);
}

function incrementSlide(id, n) {
  slideIndexes[id] += n;
  showSlides(id);
}

function currentSlide(id, n) {
  slideIndexes[id] = n;
  showSlides(id);
}

function showSlides(id) {
  const className = `.carrousel--${id}`;
  const slides = document.querySelectorAll(`${className} .mySlides`);
  const dots = document.querySelectorAll(`${className} .dot`);
  if (slideIndexes[id] > slides.length) {
    slideIndexes[id] = 1;
  }
  if (slideIndexes[id] < 1) {
    slideIndexes[id] = slides.length;
  }

  const slideIndex = slideIndexes[id];
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
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
      const value = + counter.getAttribute("data-akhi");
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

// Remove carrousel on PC media queries

window.addEventListener('load', () => { if(window.matchMedia("(min-width: 1200px)").matches) callDisplayBlock() })

const mql = window.matchMedia("(min-width: 1200px)");
mql.addEventListener("change", screenTest);

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 1200 pixels wide or more */
    callDisplayBlock()
  } else {
    /* the viewport is more than 1200 pixels less */
    for (const slide of Object.keys(slideIndexes)) {
      showSlides(slide);
    }
  }
}

function callDisplayBlock() {
  for (const slide of Object.keys(slideIndexes)) {
    displayBlock(slide);
  }
}

function displayBlock(id) {
  const className = `.carrousel--${id}`;
  const slides = document.querySelectorAll(`${className} .mySlides`);

  const slideIndex = slideIndexes[id];
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";  
  }
}