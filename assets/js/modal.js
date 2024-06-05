// modal.js
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function openModal(index) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    currentImageIndex = index;
    modal.style.display = "block";
    modalImg.src = images[currentImageIndex].src;

    document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";

    document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentImageIndex].src;
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentImageIndex].src;
}
