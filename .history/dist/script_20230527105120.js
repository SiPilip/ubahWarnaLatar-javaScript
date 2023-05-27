const circle = document.querySelectorAll(".bulet");
circle.forEach((circle) => {
  circle.addEventListener("click", (style) => {
    const computedStyle = getComputedStyle(style.target);
    document.body.style.backgroundColor = computedStyle.backgroundColor;
  });
});
