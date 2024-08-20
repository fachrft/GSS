const hamburger = document.querySelector("#hamburger");
const pageHamburger = document.querySelector("#page-hamburger");

hamburger.addEventListener("click", () => {
    pageHamburger.classList.toggle("open-hamburger");
});

AOS.init({
    once: true,
});
