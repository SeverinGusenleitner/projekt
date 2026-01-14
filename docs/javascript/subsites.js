const airlineChart = document.getElementById("airlines-chart");

createLine();
function createLine() {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "100");
  line.setAttribute("y1", "310");
  line.setAttribute("x2", "500");
  line.setAttribute("y2", "310");
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  airlineChart.appendChild(line);

  for (let i = 0; i < 4; i++) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${i * 133 + 100}`);
    line.setAttribute("x2", `${i * 133 + 100}`);
    line.setAttribute("y1", `305`);
    line.setAttribute("y2", `315`);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    airlineChart.appendChild(line);
  }
}

function createBar({ y, width, label }) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", `100`);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", "50");
  rect.setAttribute("class", "bar");
  airlineChart.appendChild(rect);

  const tooltip = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  tooltip.setAttribute("font-size", "16");
  tooltip.setAttribute("x", "0");
  // tooltip.setAttribute("text-anchor", "end");
  tooltip.setAttribute("y", `${y + 25}`);
  tooltip.textContent = label;
  airlineChart.appendChild(tooltip);
}
const airlineBars = [
  { y: 25, width: 160, label: "Cost" },
  { y: 100, width: 360, label: "Speed" },
  { y: 175, width: 240, label: "Comfort" },
  { y: 250, width: 120, label: "Eco Friendly" },
];
for (const bar of airlineBars) {
  createBar(bar);
}
