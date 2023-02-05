var x = document.getElementById("navbar");
window.onscroll = function () {
  if (
    document.body.scrollTop >= x.clientHeight ||
    document.documentElement.scrollTop >= x.clientHeight
  ) {
    x.classList.add("navbarColor");
  } else {
    x.classList.remove("navbarColor");
  }
};

var x = document.getElementById("navbar");
window.onscroll = function () {
  if (
    document.body.scrollTop >= x.clientHeight / 2 ||
    document.documentElement.scrollTop >= x.clientHeight / 2
  ) {
    x.classList.add("navbarColor");
  } else {
    x.classList.remove("navbarColor");
  }
};

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
