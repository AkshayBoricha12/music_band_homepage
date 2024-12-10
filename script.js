let slides = document.querySelectorAll(".slide");
let i = 1;

setInterval(() => {
  slides[i - 1].style.display = "none";
  slides[i].style.display = "block";
  i = (i + 1) % 3;
}, 3000);
