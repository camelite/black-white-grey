// width and height
var svgWidth = 500;
var svgHeight = 440;
var globalRadiusMultiplier = 1.5

var circleRadii = [1, 40, 80, 120];
var yOfLinesFromOrigin = [100, 100];

var svg = d3.select("body")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)

var circles = svg.selectAll("circle")
    .data(circleRadii)
    .enter()
    .append("circle");

circles.attr("class", "board")
       .attr("cx", svgWidth/2)
       .attr("cy", svgHeight/2)
       .attr("r", function(d) {
           return d*globalRadiusMultiplier;
       });


var lines = svg.selectAll("line")
    .data(yOfLinesFromOrigin)
    .enter()
    .append("line");

lines.attr("x1", 0)
     .attr("y1", 0)
     .attr("x2", 100)
     .attr("y2", 100);

