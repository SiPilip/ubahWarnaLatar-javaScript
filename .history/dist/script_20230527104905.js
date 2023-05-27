const circle = document.querySelectorAll(".bulet");
circle.forEach((circle) => {
  circle.addEventListener("click", ({ target }) => {
    const { backgroundColor } = getComputedStyle(target);
    document.body.style.backgroundColor = backgroundColor;
  });
});
