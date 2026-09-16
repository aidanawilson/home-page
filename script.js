const topbar = document.getElementById('topbar');

function handleTopbar() {
  if (window.scrollY > 70) {
    topbar.classList.add('is-visible');
  } else {
    topbar.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', handleTopbar);
window.addEventListener('load', handleTopbar);
