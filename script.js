let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    navbar.style.top = '-60px';
    } else {
    navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});


let images = ['images/scroll-img1.jpg', 'images/scroll-img2.jpg', 'images/scroll-img3.jpg']; 
let currentIndex = 1;
let backgroundDiv = document.getElementById('overview');

function changeBackgroundImage() {
    backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}


setInterval(changeBackgroundImage, 3000);