const svg = document.getElementById("airlines-chart");
createLine();
function createLine(){
    const line = document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "310");
    line.setAttribute("x2","400");
    line.setAttribute("y2", "310");
    line.setAttribute("stroke","black");
    line.setAttribute("stroke-width","2");
    svg.appendChild(line);

    for(let i = 0; i<4; i++){
      const line = document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("x1", `${i*133+1}`);
      line.setAttribute("x2", `${i*133+1}`);
      line.setAttribute("y1", `305`);
      line.setAttribute("y2", `315`);
          line.setAttribute("stroke","black");
    line.setAttribute("stroke-width","2");
      svg.appendChild(line);

    }
}
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
const airlineBars = [
  { y: 25,  width: 250, label: "Cost" },
  { y: 100, width: 380, label: "Speed"},
  { y:175,  width:390,  label: "Comfort"},
  { y:250,  width:390,   label: "Environmental Impact"}
];
for(const bar of airlineBars){
  createBar(bar);
}