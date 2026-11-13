
// Welcome message
console.log("Welcome to Jhanvi Ghag's Portfolio!");

// Display current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Jhanvi Ghag. All Rights Reserved.";
}

// Welcome alert
window.addEventListener("load", function () {
    console.log("Portfolio website loaded successfully!");
});
