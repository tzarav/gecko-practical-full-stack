import React, {Component} from 'react';
import * as d3 from "d3";

const wall_data = require('./data.json');
class ColorScale extends Component {
  componentDidMount() {
    this.drawColorScale();
  }

  drawColorScale() {
    const w = 700;
    const h = 100;
    const paddingX = 50;
    const paddingY = 20;
    var myColor = d3.scaleSequential().domain([1,10])
      .interpolator(d3.interpolateRdYlGn);
    const svg = d3.select("#colorscale")
      .append("svg")
      .attr("width", w+paddingX)
      .attr("height", h+paddingY)
      .style("width", w+paddingX)
      .style("height", h+paddingY)
      .style("margin-left", 0);

    svg.selectAll("circle")
      .data([1,2,3,4,5,6,7,8,9,10])
      .enter()
      /*
      .append("circle")
      .attr("cx", function(d,i){return 100 + i*50})
      .attr("cy", 50)
      .attr("r", 19)
      */
      .append("rect")
      .attr("x", function(d,i){return 150 + i*50})
      .attr("y", 20)
      .attr("width",50)
      .attr("height", 50)
      .attr("fill", function(d){return myColor(d) })
  }

  render(){
    return <div id={"#" + this.props.id}></div>
  }
}

export default ColorScale;
