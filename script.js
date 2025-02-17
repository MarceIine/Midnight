
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.material-icons-round');
const backgroundVideo = document.querySelector('.video-container video source');
const profileVideo = document.querySelector('.profile-circle video source');
const body = document.body;

// Video sources
const darkBackgroundVideo = "https://videos.pexels.com/video-files/2895754/2895754-uhd_2732_1440_25fps.mp4";
const lightBackgroundVideo = "https://videos.pexels.com/video-files/2935032/2935032-uhd_2560_1440_30fps.mp4";
const darkProfileVideo = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjYzdWd2MDBiMG8wZmUzbDVkYjJheWhwcGNiczJxdDU2dGZldjdleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p1sPKlISSvMpa/giphy.mp4";
const lightProfileVideo = "https://i.makeagif.com/media/12-12-2015/JoZDIX.mp4";

// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let isDark = prefersDark;
updateTheme();

// Listen for system changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  isDark = e.matches;
  updateTheme();
});

// Toggle theme manually
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  updateTheme();
});

function updateTheme() {
  icon.textContent = isDark ? 'dark_mode' : 'light_mode';
  backgroundVideo.src = isDark ? darkBackgroundVideo : lightBackgroundVideo;
  profileVideo.src = isDark ? darkProfileVideo : lightProfileVideo;
  backgroundVideo.parentElement.load();
  profileVideo.parentElement.load();
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}
