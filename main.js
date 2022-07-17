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

document.querySelector(".banners").scrollIntoView()
