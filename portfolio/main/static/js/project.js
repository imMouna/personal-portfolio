let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    
    showSlides(slideIndex += n);

}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");

    // Exit if no slides
    if (slides.length == 0){
        return;
    }

    // Reset slideIndex if it's out of bounds.
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // show the current slide
    slides[slideIndex - 1].style.display = "flex";
}