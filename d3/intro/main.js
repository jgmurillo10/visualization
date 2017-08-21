(function () {
  "use strict";
  var width = 500, height = 50;
  d3.select("body").append("h1").text("D3.js 101");
  var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];
  console.log(dataset);
  d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class","bar")
    .style("height",d=> d*5+"px");
  var svg = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", height);
  var circles = svg.selectAll("circle")
                   .data(dataset)
                   .enter()
                   .append("circle");
  circles.attr("cx", (d,i)=> (i*50)+25)
         .attr("cy", height/2)
         .attr("r", d => d)
         .attr("fill", "yellow")
         .attr("stroke", "orange")
         .attr("stroke-width", d=>d/2);
})();
