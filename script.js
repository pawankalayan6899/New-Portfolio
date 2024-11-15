document.getElementById("menu-toggle").onclick = function() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none"; // Hide the navbar
    } else {
        navbar.style.display = "block"; // Show the navbar
    }
};
