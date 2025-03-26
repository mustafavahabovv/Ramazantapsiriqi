let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? "block" : "none";
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
}

// Avtomatik slayd keçidi (hər 3 saniyədən bir)
setInterval(() => {
    moveSlide(1);
}, 3000);

// İlk yüklənmədə slayderi yenilə
updateCarousel();