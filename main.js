function myFunction() {
    let x = document.getElementById("myTopnav");
    let y = document.getElementById("myTopnav2");

    if (x.className === "navigation__list" && y.className === "navigation__list") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "navigation__list";
        y.className = "navigation__list";
    }
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});