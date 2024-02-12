// Function to create a histogram
function createHistogram(attribute) {
   // Clear previous visualization
   document.getElementById("visualization").innerHTML = "";
   // Extract numerical values for the selected attribute
   var values = data.map(function(d) { return parseInt(d[attribute]); });
   console.log(values);
   // Set up dimensions for the histogram
   var width = 1000;
   var height = 600;
   var margin = { top: 50, right: 30, bottom: 50, left: 60 }; // Increased top margin for title and bottom margin for x-axis label

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

   // Create scales for x and y axes
   var x = d3.scaleLinear()
             .domain(d3.extent(values))
             .range([margin.left, width - margin.right]);

   var bins = d3.histogram()
                .domain(x.domain())
                .thresholds(x.ticks(25))
                (values);

   var y = d3.scaleLinear()
             .domain([0, d3.max(bins, function(d) { return d.length; })])
             .nice()
             .range([height - margin.bottom, margin.top]);

   // Create bars for the histogram
   svg.append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(bins)
      .join("rect")
      .attr("x", function(d) { return x(d.x0) + 1; })
      .attr("width", function(d) { 
          return Math.max(0, x(d.x1) - x(d.x0) - 1) + 2; // Adjusted width calculation
      })
      .attr("y", function(d) { return d.length >= 0 ? y(d.length) : y(0); })
      .attr("height", function(d) { return Math.abs(y(0) - y(d.length)); })
      .attr("class", "bar");

   // Add values at the top of each bar
   svg.selectAll(".bar-value")
      .data(bins)
      .enter()
      .append("text")
      .attr("class", "bar-value")
      .attr("text-anchor", "middle")
      .attr("x", function(d) { return x(d.x0) + (x(d.x1) - x(d.x0)) / 2; }) // Position at the center of each bar
      .attr("y", function(d) { return d.length >= 0 ? y(d.length) - 5 : y(0) + 15; }) // Adjusted y position for negative values
      .text(function(d) { return d.length; })
      .attr("fill", "grey")
       .style("font-size", "12px");

   // Create x-axis
   svg.append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")")
      .call(d3.axisBottom(x))
      .append("text") // Append x-axis label
      .attr("x", width / 2)
      .attr("y", margin.bottom - 10)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .text(data_info[attribute]["x_title"])
      .attr("fill", "white");

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
      .text(data_info[attribute]["y_title"])
      .attr("fill", "white");
}
