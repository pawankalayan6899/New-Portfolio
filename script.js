document.getElementById("menu-toggle").onclick = function() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "enable") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "enable";
    }
};
