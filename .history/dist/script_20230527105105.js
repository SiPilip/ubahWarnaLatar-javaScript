const circle = document.querySelectorAll(".bulet");
circle.forEach((circle) => {
  circle.addEventListener("click", (style) => {
    const computedStyle = getComputedStyle(target);
    document.body.style.backgroundColor = computedStyle.backgroundColor;
  });
});
