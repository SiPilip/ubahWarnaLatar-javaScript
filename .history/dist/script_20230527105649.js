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
  document.body.style.backgroundColor = "#EDEDED";
}
