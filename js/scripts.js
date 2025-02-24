document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".card-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0;
    const totalCards = document.querySelectorAll(".card-track .card").length;
    const cardsPerView = 2;
    const maxIndex = Math.ceil(totalCards / cardsPerView);

    function updateCarousel() {
        const moveAmount = index * -33.33;
        track.style.transform = `translateX(${moveAmount}%)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".card-track2");
    const prevBtn = document.querySelector(".prev2");
    const nextBtn = document.querySelector(".next2");

    let index = 0;
    const totalCards = document.querySelectorAll(".card-track2 .card").length;
    const cardsPerView = 2;
    const maxIndex = Math.ceil(totalCards / cardsPerView);

    function updateCarousel() {
        const moveAmount = index * -33.33;
        track.style.transform = `translateX(${moveAmount}%)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });
});