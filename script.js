const menuIcon = document.querySelector(".menu-icon");
const navbarUl = document.querySelector(".navbar-ul");
const filter = document.querySelector(".filter");
var i = 1

menuIcon.addEventListener("click", () => {
    if (i===1) {
        navbarUl.style.display = "flex";
        navbarUl.style.flexDirection = "column";
        navbarUl.style.paddingLeft = "30px";
        navbarUl.style.fontWeight = "600";
        navbarUl.style.fontSize = "18px";
        navbarUl.style.backgroundColor = "hsl(36, 100%, 99%)";
        navbarUl.style.height = "100vh";
        navbarUl.style.width = "70vw";
        navbarUl.style.right = "0"
        navbarUl.style.top = "0";
        navbarUl.style.position = "absolute";
        navbarUl.style.paddingTop = "200px";
        navbarUl.style.gap = "25px";

        filter.style.display = "block";

        menuIcon.src = "assets/images/icon-menu-close.svg";
        menuIcon.setAttribute("data-openclose", "open");
        i = 2;
    } else {
        navbarUl.style.display = "none";

        filter.style.display = "none";

        menuIcon.src = "assets/images/icon-menu.svg";
        menuIcon.setAttribute("data-openclose", "close");

        navbarUl.style.flexDirection = "row";
        navbarUl.style.paddingLeft = "0px";
        navbarUl.style.fontWeight = "normal";
        navbarUl.style.fontSize = "15px";
        navbarUl.style.backgroundColor = "hsl(36, 100%, 99%)";
        navbarUl.style.height = "auto";
        navbarUl.style.width = "auto";
        navbarUl.style.right = "0"
        navbarUl.style.top = "0";
        navbarUl.style.position = "relative";
        navbarUl.style.paddingTop = "0px";
        navbarUl.style.gap = "30px";
        
        filter.style.display = "none";
        
        menuIcon.src = "assets/images/icon-menu.svg"

        i = 1;
    }
})

var scWidth = 1
window.addEventListener("resize", () => {
    var screenWidth = window.innerWidth;
    console.log(screenWidth)
    if (screenWidth > 600 & scWidth === 1 & menuIcon.getAttribute("data-openclose") === "open") {
        menuIcon.click();
        navbarUl.style.display = "flex";
        scWidth = 2;
    } else if (screenWidth < 600 & scWidth === 2) {
        scWidth = 1;
        navbarUl.style.display = "none";
    }
})
