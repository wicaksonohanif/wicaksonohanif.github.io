const nav = Document.getElementById("nav");

Window.addEventListener("scroll", function () {
  scrollposition = Window.scrollY;
  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});
