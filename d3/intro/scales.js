(function () {
  "use strict";
  var w = 500, h = 300;

  //input-domain
  //output-range
  var scale = d3.scale.linear();
  // console.log(scale);
  // console.log(scale(2.5));
  scale.domain([100,500]);
  scale.range([10,350]);
  // console.log(scale(2.5));
  //another fancy way
  var scaleFancy = d3.scale.linear()
                           .domain([100,500])
                           .range([10,350]);
  // console.log(scale(100));
  // console.log(scale(300));
  // console.log(scale(500));
  var padding = 20;
  var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
                [600, 150]
              ];
  var xScale = d3.scale.linear()
                       .domain([0,d3.max(dataset, d=>d[0])])
                       .range([padding,w - padding*3]);
  var yScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, d=>d[1])])
                       .range([h - padding ,padding]);
  var rScale = d3.scale.linear()
                       .domain([0,d3.max(dataset, d=>d[1])])
                       .range([2,5]);
  var svg = d3.select("body")
              .append("svg")
              .attr("width",w)
              .attr("height",h);
  var circles = svg.selectAll("circle")
                   .data(dataset)
                   .enter()
                   .append("circle")
                   .attr("cx", d => xScale(d[0]))
                   .attr("cy", d => yScale(d[1]))
                   .attr("r", d => rScale(d[1]));
  var texts = svg.selectAll("text")
                 .data(dataset)
                 .enter()
                 .append("text")
                 .text(d => d[0] + "," + d[1])
                 .attr("x", function(d) {
                     return xScale(d[0]);
                 })
                 .attr("y", function(d) {
                     return yScale(d[1]);
                 });

})();
