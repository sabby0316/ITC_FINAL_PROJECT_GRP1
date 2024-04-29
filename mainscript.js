document.getElementById("terms-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    document.getElementById("popup-container").style.display = "flex";
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("popup-container").style.display = "none";
});
