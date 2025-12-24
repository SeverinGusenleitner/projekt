const svg = document.getElementById("airlines-chart");


createAirlinesCost();
createAirlinesSpeed();

function createAirlinesCost(){
    const cost = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    cost.setAttribute("y", "25");
    cost.setAttribute("x", "0");
    cost.setAttribute("width", "250");
    cost.setAttribute("height", "50");
    cost.setAttribute("class", "bar");
    
    svg.appendChild(cost);
    
    const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text");
    
    tooltip.setAttribute("fill", "white");
    tooltip.setAttribute("font-size", "16");
    tooltip.setAttribute("visibility", "hidden");
    tooltip.textContent = "Cost";
    svg.appendChild(tooltip);
    
    // Show tooltip on hover
    cost.addEventListener("mouseenter", () => {
      tooltip.setAttribute("x", parseFloat(cost.getAttribute("x"))+5);
      tooltip.setAttribute("y", parseFloat(cost.getAttribute("y")) + 30);
      tooltip.setAttribute("visibility", "visible");
    });
    
    // Hide tooltip when mouse leaves
    cost.addEventListener("mouseleave", () => {
      tooltip.setAttribute("visibility", "hidden");
    });
}
function createAirlinesSpeed(){
    const speed = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    speed.setAttribute("y", "100");
    speed.setAttribute("x", "0");
    speed.setAttribute("width", "380");
    speed.setAttribute("height", "50");
    speed.setAttribute("class", "bar");
    
    svg.appendChild(speed);
    
    const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text");
    
    tooltip.setAttribute("fill", "white");
    tooltip.setAttribute("font-size", "16");
    tooltip.setAttribute("visibility", "hidden");
    tooltip.textContent = "Speed";
    svg.appendChild(tooltip);
    
    // Show tooltip on hover
    speed.addEventListener("mouseenter", () => {
      tooltip.setAttribute("x", parseFloat(speed.getAttribute("x"))+5);
      tooltip.setAttribute("y", parseFloat(speed.getAttribute("y")) + 30);
      tooltip.setAttribute("visibility", "visible");
    });
    
    // Hide tooltip when mouse leaves
    speed.addEventListener("mouseleave", () => {
      tooltip.setAttribute("visibility", "hidden");
    });
}
function createAirlinesSpeed(){
    const speed = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    speed.setAttribute("y", "100");
    speed.setAttribute("x", "0");
    speed.setAttribute("width", "380");
    speed.setAttribute("height", "50");
    speed.setAttribute("class", "bar");
    
    svg.appendChild(speed);
    
    const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text");
    
    tooltip.setAttribute("fill", "white");
    tooltip.setAttribute("font-size", "16");
    tooltip.setAttribute("visibility", "hidden");
    tooltip.textContent = "Speed";
    svg.appendChild(tooltip);
    
    // Show tooltip on hover
    speed.addEventListener("mouseenter", () => {
      tooltip.setAttribute("x", parseFloat(speed.getAttribute("x"))+5);
      tooltip.setAttribute("y", parseFloat(speed.getAttribute("y")) + 30);
      tooltip.setAttribute("visibility", "visible");
    });
    
    // Hide tooltip when mouse leaves
    speed.addEventListener("mouseleave", () => {
      tooltip.setAttribute("visibility", "hidden");
    });
}