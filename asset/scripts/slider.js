let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slider_container');

function showSlide(index) {
    const offset = -100 * index;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    dots[Math.floor(index)].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
}


function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

setInterval(nextSlide, 4000);

showSlide(currentIndex);
