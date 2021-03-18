import React, {Component} from 'react';
import * as d3 from "d3";

const wall_data = require('./data.json');
class ThicknessMap extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const xplots = wall_data['data']['plot_x'];
    const yplots = wall_data['data']['plot_y'];
    const thickness = wall_data['data']['thickness'];

    const maxT = Math.max.apply(null, thickness);
    const minT = Math.min.apply(null, thickness);

    const maxX = Math.max.apply(null, xplots);
    const minX = Math.min.apply(null, xplots);

    const maxY = Math.max.apply(null, yplots);
    const minY = Math.min.apply(null, yplots);

    var data = [];
    const w = 700;
    const h = 700;
    const paddingX = 50;
    const paddingY = 50;

    for (var i = 0 ; i < xplots.length; i++) {
      data.push({x: xplots[i], y: yplots[i], t: thickness[i] });
    }

    const svg = d3.select("#datablock")
      .append("svg")
      .attr("width", w+paddingX)
      .attr("height", h+paddingY)
      .style("width", w+paddingX)
      .style("height", h+paddingY)
      .style("margin-left", 0);

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => d.x*10 + paddingX)
      .attr("cy", (d, i) => h - d.y*10)
      .attr("r", 1)
      .attr("fill", (d,i) => d3.interpolateRdYlGn((d.t-minT)/(maxT-minT)))
      .append("svg:title")
      .text((d,i) => d.t)

    // Create x axis scale
    var scaleX = d3.scaleLinear()
                  .domain([minX, maxX])
                  .range([0, w]);

    // Add scale to axis
    var x_axis = d3.axisBottom()
                   .scale(scaleX);

    svg.append("g")
      .attr("transform", "translate(50, 710)")
      .call(x_axis);

    // Create y axis scale
    var scaleY = d3.scaleLinear()
                 .domain([minY, maxY])
                 .range([h, 0]);

    // Add scale to axis
    var y_axis = d3.axisLeft()
                 .scale(scaleY);

    svg.append("g")
      .attr("transform", "translate(50, 10)")
      .call(y_axis);

    // X axis label
    svg.append("text")
          .attr("class", "x label")
          .attr("text-anchor", "end")
          .attr("x", w/2 + paddingX)
          .attr("y", h + paddingY)
          .text("Position");

    // Y axis label
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", 0-(h/2))
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Elevation");

      svg.append("line")
         .attr("x1", paddingX)
         .attr("x2", w+paddingX*2)
         .attr("y1", 4)
         .attr("y2", 4)
         .attr("stroke", "black")
  }

  render(){
    return <div id={"#" + this.props.id}></div>
  }
}

export default ThicknessMap;
