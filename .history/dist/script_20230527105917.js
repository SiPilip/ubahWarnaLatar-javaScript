const circle = document.querySelectorAll(".bulet");
circle.forEach((circle) => {
  circle.addEventListener("click", (style) => {
    const computedStyle = getComputedStyle(style.target);
    document.body.style.backgroundColor = computedStyle.backgroundColor;
  });
});

let random = Math.random();
console.log(random);
if (random <= 0.2) {
  document.body.style.backgroundColor = "#EF4444";
} else if (random <= 0.4) {
  document.body.style.backgroundColor = "#FCD34D";
} else if (random <= 0.6) {
  document.body.style.backgroundColor = "#FCD34D";
} else if (random <= 0.8) {
  document.body.style.backgroundColor = "#FCD34D";
} else if (random <= 0.1) {
  document.body.style.backgroundColor = "#FCD34D";
}
