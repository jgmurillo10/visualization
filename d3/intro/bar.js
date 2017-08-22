(function () {
  var w = 500,
      h = 100,
      barPadding = 1;
  // Create SVG element
  var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
  var svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
  svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("x", (d,i)=> i*(w/dataset.length))
     .attr("y", d=>h-d*4)
     .attr("width", w/dataset.length - barPadding)
     .attr("height", d=>d*4)
     .attr("fill", d=>"rgba(0,0, "+(d*10)+",0.5)");
  svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(d=>d)
     .attr("x", (d,i) => i*(w/dataset.length)+(w/dataset.length - barPadding)/2)
     .attr("y", (d,i) => 14+h-(d*4))
     .attr("fill", "white")
     .attr("text-anchor", "middle")
})();
