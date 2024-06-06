document.addEventListener('keydown', function(event) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const slideWidth = slides[0].clientWidth;
    const currentScroll = slider.scrollLeft;

    if (event.key === 'ArrowRight') {
        slider.scrollLeft = currentScroll + slideWidth;
    } else if (event.key === 'ArrowLeft') {
        slider.scrollLeft = currentScroll - slideWidth;
    }
});
