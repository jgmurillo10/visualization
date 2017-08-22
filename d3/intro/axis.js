(function () {
  "use strict";
  var w = 500, h = 300;
  var padding = 30;
  var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
                [600, 150]
              ];
  var formatAsPercentage = d3.format(".1%");
  //Dynamic, random dataset
  var dataset = [];
  var numDataPoints = 50;
  var xRange = Math.random() *1000;
  var yRange = Math.random() *1000;
  for (var i = 0; i < numDataPoints; i++) {
      var newNumber1 = Math.round(Math.random() * xRange);
      var newNumber2 = Math.round(Math.random() * yRange);
      dataset.push([newNumber1, newNumber2]);
  }
  var xScale = d3.scale.linear()
                       .domain([0,d3.max(dataset, d=>d[0])])
                       .range([padding,w - padding*3]);
  var yScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, d=>d[1])])
                       .range([h - padding ,padding]);
  var rScale = d3.scale.linear()
                       .domain([0,d3.max(dataset, d=>d[1])])
                       .range([2,5]);
  var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickFormat(formatAsPercentage)
                .ticks(5); //set rough # of ticks
  //y axis
  var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks("5")
  //fancy way
  var fancyAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom");
  console.log(xAxis);
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
  // var texts = svg.selectAll("text")
  //                .data(dataset)
  //                .enter()
  //                .append("text")
  //                .text(d => d[0] + "," + d[1])
  //                .attr("x", function(d) {
  //                    return xScale(d[0]);
  //                })
  //                .attr("y", function(d) {
  //                    return yScale(d[1]);
  //                });
  svg.append("g")
     .attr("class","axis") //asign "axis" class
     .attr("transform", "translate(0,"+ (h-padding)+ ")")
     .call(xAxis);
  svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate("+padding+",0)")
  .call(yAxis);

})();
