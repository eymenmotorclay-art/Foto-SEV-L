// Foto Sevil Web Sitesi
// Foto Sevil Web Sitesi

document.addEventListener("DOMContentLoaded", () => {

    console.log("Foto Sevil web sitesi hazır!");


    // GALERİ FOTOĞRAF BÜYÜTME

    const galleryImages = document.querySelectorAll(".gallery-item img");

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightbox-image");

    const closeButton = document.querySelector(".lightbox-close");


    galleryImages.forEach((image) => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightbox.style.display = "flex";

        });

    });


    closeButton.addEventListener("click", () => {

        lightbox.style.display = "none";

    });


    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

});