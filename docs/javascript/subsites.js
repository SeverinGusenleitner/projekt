const airlineChart = document.getElementById("airlines-chart");
const bikeChart = document.getElementById("bike-chart");
const carChart = document.getElementById("car-chart");
const trainChart = document.getElementById("train-chart");
const walkChart = document.getElementById("walk-chart");

function createLine(svg) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "100");
  line.setAttribute("y1", "310");
  line.setAttribute("x2", "500");
  line.setAttribute("y2", "310");
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  svg.appendChild(line);
  
  for (let i = 0; i < 4; i++) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${i * 133 + 100}`);
    line.setAttribute("x2", `${i * 133 + 100}`);
    line.setAttribute("y1", `305`);
    line.setAttribute("y2", `315`);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  }
}

function createBar({ y, width, label, svg}) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", `100`);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", "50");
  rect.setAttribute("class", "bar");
  svg.appendChild(rect);
  
  const tooltip = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  tooltip.setAttribute("font-size", "16");
  tooltip.setAttribute("x", "0");
  // tooltip.setAttribute("text-anchor", "end");
  tooltip.setAttribute("y", `${y + 25}`);
  tooltip.textContent = label;
  svg.appendChild(tooltip);
}
const airlineBars = [
  { y: 25, width: 160, label: "Cost", svg: airlineChart},
  { y: 100, width: 360, label: "Speed", svg: airlineChart},
  { y: 175, width: 240, label: "Comfort", svg: airlineChart },
  { y: 250, width: 120, label: "Eco Friendly", svg:airlineChart },
];
const bikeBars = [
  { y: 25, width: 60, label: "Cost" , svg: bikeChart},        // cheap
  { y: 100, width: 120, label: "Speed", svg: bikeChart },
  { y: 175, width: 220, label: "Comfort", svg: bikeChart },
  { y: 250, width: 390, label: "Eco Friendly", svg: bikeChart },
];
const carBars = [
  { y: 25, width: 300, label: "Cost", svg: carChart },       // expensive
  { y: 100, width: 260, label: "Speed", svg: carChart },
  { y: 175, width: 280, label: "Comfort", svg: carChart },
  { y: 250, width: 150, label: "Eco Friendly", svg: carChart },
];
const trainBars = [
  { y: 25, width: 200, label: "Cost", svg: trainChart },       // medium cost
  { y: 100, width: 300, label: "Speed",svg: trainChart },
  { y: 175, width: 300, label: "Comfort",svg: trainChart },
  { y: 250, width: 320, label: "Eco Friendly",svg: trainChart },
];
const walkBars = [
  { y: 25, width: 20, label: "Cost", svg:walkChart },        // almost free
  { y: 100, width: 60, label: "Speed", svg:walkChart },
  { y: 175, width: 200, label: "Comfort", svg:walkChart },
  { y: 250, width: 400, label: "Eco Friendly", svg:walkChart },
];

if (airlineChart) {
  for (const bar of airlineBars) {
    createBar(bar);
  }
  createLine(airlineChart);
}

if (bikeChart) {
  for (const bar of bikeBars) {
    createBar(bar);
  }
  createLine(bikeChart);
}

if (carChart) {
  for (const bar of carBars) {
    createBar(bar);
  }
  createLine(carChart);
}

if (trainChart) {
  for (const bar of trainBars) {
    createBar(bar);
  }
  createLine(trainChart);
}

if (walkChart) {
  for (const bar of walkBars) {
    createBar(bar);
  }
  createLine(walkChart);
}
