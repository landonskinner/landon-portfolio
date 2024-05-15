window.addEventListener("DOMContentLoaded", () => {
  const sectionTop = document
    .querySelector("#skills-section")
    .getBoundingClientRect().top;
  const windowHeight = document.body.scrollHeight;
  const topPercentage = Math.floor((sectionTop / windowHeight) * 100);

  document.querySelectorAll("#skills-section > div").forEach((line, i) => {
    line.style["animation-range"] = `${topPercentage - 10 + i * 10}% ${
      topPercentage + 10 + i * 10
    }%`;
    line.style.transform = `translateX(${
      (i % 2 === 0 ? -1.5 : 1.5) * line.getBoundingClientRect().width
    }px)`;
  });
});
