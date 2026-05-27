document.addEventListener('DOMContentLoaded', () => {

const track = document.querySelector('.carouselTrack');
const slides = document.querySelectorAll('.carouselSlide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentIndex = 0;
let gap = 20;

function updateCarousel(){
  if (slides.length === 0 || !slides[0]) return;

  const slideWidth = slides[0].getBoundingClientRect().width;
  const amountToMove = (slideWidth + gap) * currentIndex;
  track.style.transform = `translateX(-${amountToMove}px)`;
}

nextBtn.addEventListener('click', () => {

  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
}) 

prevBtn.addEventListener('click', () => {
  
  if (currentIndex <= 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
})

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

updateCarousel();
});

function swapAchievement() {
  const bar1 = document.getElementById('achievement1A');
  const details1 = document.getElementById('achievement1B');

  bar1.classList.toggle('active');
  details1.classList.toggle('active');
};

function swapAchievement2() {
  const bar1 = document.getElementById('achievement2A');
  const details1 = document.getElementById('achievement2B');

  bar1.classList.toggle('active');
  details1.classList.toggle('active');
};

function swapAchievement3() {
  const bar1 = document.getElementById('achievement3A');
  const details1 = document.getElementById('achievement3B');

  bar1.classList.toggle('active');
  details1.classList.toggle('active');
};