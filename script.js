// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Video background to image transition
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("video-bg");
    let imageBg = document.getElementById("image-bg");

    if (video) {
        video.addEventListener("ended", function () {
            video.classList.add("hidden"); // Hide the video
            imageBg.style.display = "block"; // Show the background image
        });
    }
});
