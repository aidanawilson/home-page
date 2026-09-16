// Apogee Lab — small enhancements only.
// The site still works without JavaScript.

document.getElementById("year").textContent = new Date().getFullYear();

// Replace this with the real YouTube channel URL when ready.
const youtubeUrl = "https://www.youtube.com/";

const youtubeLink = document.getElementById("youtube-link");

if (youtubeLink) {
  youtubeLink.href = youtubeUrl;
}
