document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".gallery-btn.left");
    const nextBtn = document.querySelector(".gallery-btn.right");
    const gallery = document.querySelector(".gallery");
    const images = document.querySelectorAll(".gallery img");
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth; // Assuming all images have the same width

    function scrollNext() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            gallery.scrollTo({
                left: gallery.scrollLeft + imageWidth,
                behavior: 'smooth'
            });
        }
    }

    function scrollPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            gallery.scrollTo({
                left: gallery.scrollLeft - imageWidth,
                behavior: 'smooth'
            });
        }
    }

    prevBtn.addEventListener("click", scrollPrev);
    nextBtn.addEventListener("click", scrollNext);
});