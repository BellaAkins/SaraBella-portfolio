const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun-icon.svg";
  } else {
    icon.src = "images/moon-icon.svg";
  }
};
