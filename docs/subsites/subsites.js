const svg = document.getElementById("airlines-chart");

function createBar({ y, width, label }) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", "50");
  rect.setAttribute("class", "bar");
  svg.appendChild(rect);

  const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text");
  tooltip.setAttribute("fill", "white");
  tooltip.setAttribute("font-size", "16");
  tooltip.setAttribute("visibility", "hidden");
  tooltip.textContent = label;
  svg.appendChild(tooltip);

  rect.addEventListener("mouseenter", () => {
    tooltip.setAttribute("x", 5);
    tooltip.setAttribute("y", Number(y) + 30);
    tooltip.setAttribute("visibility", "visible");
  });

  rect.addEventListener("mouseleave", () => {
    tooltip.setAttribute("visibility", "hidden");
  });
}