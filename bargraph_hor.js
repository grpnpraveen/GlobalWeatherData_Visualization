// Function to create a bar graph
function createHorBarGraph(attribute) {
    // Clear previous visualization
    document.getElementById("visualization").innerHTML = "";
    const dd = get_graph_data(attribute);
    console.log(dd);
    
    const svgWidth = 1000;
    const svgHeight = 600;
    
    const margin = { top: 20, bottom: 50, right: 20, left: 220 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    
    // axes data
    const X = d3.map(dd, d => d.x_values);
    const Y = d3.map(dd, d => d.y_values);
    
    // set domain and range for x and y scales
    const XDomain = [0, d3.max(Y)]; // Swapping X and Y for horizontal bar
    const YDomain = X;
    
    const XRange = [0, width - margin.right];
    const YRange = [height - margin.bottom, margin.top];
    
    const XScale = d3.scaleLinear(XDomain, XRange);
    const YScale = d3.scaleBand(YDomain, YRange).paddingInner(0.2).paddingOuter(0.5); // Adjust padding here
    
    // create axes
    const XAxis = d3.axisBottom(XScale);
    const YAxis = d3.axisLeft(YScale);
    
    const svgBar = d3.select("#visualization")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    svgBar.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`) // Move x-axis to the bottom
      .call(XAxis)
      .selectAll("text")
      .style("text-anchor", "middle")
      .style("font-size", "10px") // Set font size here
      .style("fill", "white"); // Set text color to white
    
    svgBar.append("text")
      .attr("class", "x-axis-label")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 50 )
      .style("text-anchor", "middle")
      .style("fill", "#7da6ff") // Set text color to white
      .text(data_info[attribute]["y_title"]);
    
    svgBar.append("g")
      .attr("class", "y-axis")
      .call(YAxis)
      .selectAll("text")
      .style("font-size", "10px") // Set font size here
      .style("fill", "white"); // Set text color to white

    // Y label 
    svgBar.append("text")
      .attr("class", "y-axis-label")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 40)
      .style("text-anchor", "middle")
      .style("fill", "#7da6ff") // Set text color to white
      .text(data_info[attribute]["x_title"]);
    
    // bars
    svgBar.selectAll("rect")
      .data(dd)
      .enter()
      .append("rect")
      .attr("y", (d, i) => YScale(X[i]))
      .attr("x", 0) // Align bars to start from the left
      .attr("height", YScale.bandwidth())
      .attr("width", (d, i) => XScale(Y[i]))
      .attr("fill", "steelblue");
    
    // values at the end of bars
    svgBar.selectAll(".value")
      .data(dd)
      .enter()
      .append("text")
      .attr("class", "value")
      .attr("x", (d, i) => XScale(Y[i]) + 5) // Adjust the x position for better alignment
      .attr("y", (d, i) => YScale(X[i]) + YScale.bandwidth() / 2)
      .attr("text-anchor", "start") // Adjust text anchor to start
      .attr("alignment-baseline", "middle")
      .style("font-size", "10px") // Set font size here
      .style("fill", "grey") // Set text color to white
      .text(d => d.y_values);
    
    svgBar.append("text")
      .attr("class", "chart-title")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", -margin.top + 20)
      .style("fill", "#7da6ff") // Set text color to white
      .text(data_info[attribute]["heading"]);
}
