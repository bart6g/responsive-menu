const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines[0].classList.toggle("line-first");
  lines[1].classList.toggle("line-sec");
  lines[2].classList.toggle("line-third");
});
