let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.getElementById("readMoreBtn").onclick = function() {
    var content = document.getElementById("moreContent");
    if (content.style.display === "none") {
        content.style.display = "block";
        this.textContent = "Read Less"; // Ganti teks tombol
    } else {
        content.style.display = "none";
        this.textContent = "Read More"; // Ganti teks tombol
    }
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

document.getElementById("readMoreBtn").onclick = function() {
    var content = document.getElementById("moreContent");
    if (content.style.display === "none") {
        content.style.display = "block";
        this.textContent = "Read Less";
    } else {
        content.style.display = "none";
        this.textContent = "Read More";
    }
};

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});