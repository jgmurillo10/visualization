(function () {
  "use strict";
  var w = 500,
      h = 100,
      barPadding = 1;
  var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];
  var svg = d3.select("body")
              .append("svg")
              .attr("width",w)
              .attr("height",h);
  var circles = svg.selectAll("circle")
                   .data(dataset)
                   .enter()
                   .append("circle")
                   .attr("cx", d => d[0])
                   .attr("cy", d => d[1])
                   .attr("r", d => Math.sqrt(h-d[1]));
  var texts = svg.selectAll("text")
                 .data(dataset)
                 .enter()
                 .append("text")
                 .text(d => d[0] + "," + d[1])
})();
