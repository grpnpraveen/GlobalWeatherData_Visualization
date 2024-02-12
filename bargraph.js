// Function to create a bar graph
function createBarGraph(attribute) {
    // Clear previous visualization
    document.getElementById("visualization").innerHTML = "";
    const dd = get_graph_data(attribute);
    console.log(dd);
    
    const svgWidth = 1000;
    const svgHeight = 600;
    
    const margin = { top: 20, bottom: 50, right: 20, left: 80 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    
    // axes data
    const X = d3.map(dd, d => d.x_values);
    const Y = d3.map(dd, d => d.y_values);
    
    // set domain and range for x and y scales
    const XDomain = X;
    const YDomain = [0, d3.max(Y)]; // using d3.max to get the maximum value of Y
    
    const XRange = [0, width - margin.right];
    const YRange = [height - margin.bottom, margin.top];
    
    const XScale = d3.scaleBand(XDomain, XRange).paddingInner(0.2).paddingOuter(0.5); // Adjust padding here
    const YScale = d3.scaleLinear(YDomain, YRange);
    
    // create axes
    const XAxis = d3.axisBottom(XScale);
    const YAxis = d3.axisLeft(YScale);
    
    const svgBar = d3.select("#visualization")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight+graph_heigth)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    svgBar.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(XAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", "-0.7em")
      .attr("transform", "rotate(-90)")
      .style("font-size", "10px") // Set font size here
      .style("fill", "white"); // Set text color to white
    
    svgBar.append("text")
      .attr("class", "x-axis-label")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom+100)
      .style("text-anchor", "middle")
      .style("fill", "#7da6ff") // Set text color to white
      .text(data_info[attribute]["x_title"]);
    
    svgBar.append("g")
      .attr("class", "y-axis")
      .call(YAxis)
      .selectAll("text")
      .style("fill", "white"); // Set text color to white

    // Y label 
    svgBar.append("text")
      .attr("class", "y-axis-label")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 20)
      .style("text-anchor", "middle")
      .style("fill", "#7da6ff") // Set text color to white
      .text(data_info[attribute]["y_title"]);
    
    // bars
    svgBar.selectAll("rect")
      .data(dd)
      .enter()
      .append("rect")
      .attr("x", (d, i) => XScale(X[i]))
      .attr("y", (d, i) => YScale(Y[i]))
      .attr("width", XScale.bandwidth())
      .attr("height", (d, i) => height - margin.bottom - YScale(Y[i]))
      .attr("fill", "#00796b");
    
    // values at the top of bars
    svgBar.selectAll(".value")
      .data(dd)
      .enter()
      .append("text")
      .attr("class", "value")
      .attr("x", (d, i) => XScale(X[i]) + XScale.bandwidth() / 2)
      .attr("y", (d, i) => YScale(Y[i]) - 5) // Adjust the y position for better alignment
      .attr("text-anchor", "middle")
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