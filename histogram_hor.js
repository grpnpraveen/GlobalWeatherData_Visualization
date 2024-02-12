// Function to create a horizontal histogram
function createHorizontalHistogram(attribute) {
   // Clear previous visualization
   document.getElementById("visualization").innerHTML = "";
   // Extract numerical values for the selected attribute
   var values = data.map(function(d) { return parseInt(d[attribute]); });
   console.log(values);
   // Set up dimensions for the histogram
   var width = 1000;
   var height = 600;
   var margin = { top: 50, right: 30, bottom: 70, left: 60 }; // Increased bottom margin for x-axis label and bars adjustment

   // Create SVG element
   var svg = d3.select("#visualization")
               .append("svg")
               .attr("width", width)
               .attr("height", height);

   // Create title
   svg.append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .attr("fill", "white")
      .text(data_info[attribute]["heading"]); // Set title based on attribute name

   // Create scales for x and y axes (switched for horizontal histogram)
   var y = d3.scaleLinear()
       .domain([d3.min(values), d3.max(values)])
       .range([height - margin.bottom, margin.top]);

   var bins = d3.histogram()
       .domain(y.domain())
       .thresholds(y.ticks(25))
       (values);

   var x = d3.scaleLinear()
       .domain([0, d3.max(bins, function(d) { return d.length; })])
       .nice()
       .range([margin.left, width - margin.right]);

   // Create bars for the histogram
   svg.append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(bins)
      .join("rect")
      .attr("x", margin.left) // Fixed x position for horizontal bars
      .attr("y", function(d) { return y(d.x1); }) // Adjusted y position to place bars above x-axis
      .attr("height", function(d) { 
          return Math.abs(y(d.x0) - y(d.x1)) || 1; // Ensure a minimum height of 1 for zero values
      })
      .attr("width", function(d) { return x(d.length) - margin.left; }) // Adjusted width calculation
      .attr("class", "bar");

   // Add values at the end of each bar
   svg.selectAll(".bar-value")
      .data(bins)
      .enter()
      .append("text")
      .attr("class", "bar-value")
      .attr("text-anchor", "start")
      .attr("x", function(d) { return x(d.length) + 5; }) // Adjusted x position
      .attr("y", function(d) { return y(d.x1) + (y(d.x0) - y(d.x1)) / 2; }) // Position at the center of each bar
      .text(function(d) { return d.length; })
      .attr("fill", "grey");

   // Create y-axis
   svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y))
      .append("text") // Append y-axis label
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 15)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .text(data_info[attribute]["x_title"])
      .attr("fill", "white");

   // Create x-axis
   svg.append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")")
      .call(d3.axisBottom(x))
      .append("text") // Append x-axis label
      .attr("x", width / 2)
      .attr("y", margin.bottom - 10)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .text(data_info[attribute]["y_title"])
      .attr("fill", "white");
}
