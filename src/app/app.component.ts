import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ScaleBand } from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit() {

   // create the svg


  // set the dimensions and margins of the graph
  // create the svg


  // set the dimensions and margins of the graph
  const margin = {top: 20, right: 20, bottom: 60, left: 60},
      width = 960 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

   const svg = d3.select("div#histogramHolder").append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom);

   var g = svg.append("g");
   g.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// set x scale
var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1)
    .paddingOuter(0.5)
    .align(0.1);

// set y scale
var y = d3.scaleLinear()
    .rangeRound([height, 0]);

// set the colors
var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


var data = [
{
"State": "Ireland",
"Under 5 Years":  1000,
"5 to 13 Years":  4000,
"14 to 17 Years": 6000,
"18 to 24 Years": 2000,
"25 to 44 Years": 400,
"45 to 64 Years": 600,
"65 Years and Over": 4000,
"total": "18000"
},
{
"State": "Great Britain",
"Under 5 Years": 4000,
"5 to 13 Years": 600,
"14 to 17 Years":400,
"18 to 24 Years": 2000,
"25 to 44 Years": 6000,
"45 to 64 Years": 4000,
"65 Years and Over": 1000,
"total": "18000"
 },
 {
"State": "Canada",
"Under 5 Years": 4000,
"5 to 13 Years": 600,
"14 to 17 Years":400,
"18 to 24 Years": 2000,
"25 to 44 Years": 6000,
"45 to 64 Years": 4000,
"65 Years and Over": 1000,
"total": "18000"
 },
 {
"State": "Africa",
"Under 5 Years": 4000,
"5 to 13 Years": 600,
"14 to 17 Years":400,
"18 to 24 Years": 2000,
"25 to 44 Years": 6000,
"45 to 64 Years": 4000,
"65 Years and Over": 0,
"total": "17000"
 }	
];


  // keys["Under 5 Years","5 to 13 Years","14 to 17 Years","18 to 24 Years","25 to 44 Years","45 to 64 Years","65 Years and Over"]

  var keys = [ "Under 5 Years", "5 to 13 Years","14 to 17 Years","18 to 24 Years","25 to 44 Years","45 to 64 Years","65 Years and Over" ];
  x.domain(data.map(function(d) { return d.State; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
  z.domain(keys);

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) { return x(d.data.State); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .attr("width", x.bandwidth())
    .on("mouseover", function() { tooltip.style("display", null); })
    .on("mouseout", function() { tooltip.style("display", "none"); })
    .on("mousemove", function(d) {
      var xPosition = d3.mouse(this)[0] - 5;
      var yPosition = d3.mouse(this)[1] - 5;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
      tooltip.select("text").text(d[1]-d[0]);
    });

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")	
        .style("text-anchor", "middle")
        .attr("dx", ".8em")
        .attr("dy", "1em")
        .attr("transform", "rotate(30)");


  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks())
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start");

  var legend = g.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", z);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });

  // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
    .attr("class", "tooltip")
    .style("display", "none");
      
  tooltip.append("rect")
    .attr("width", 60)
    .attr("height", 20)
    .attr("fill", "white")
    .style("opacity", 0.5);

  tooltip.append("text")
    .attr("x", 30)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold");


  }

}
