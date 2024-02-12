
// Function to create a histogram
function createHistogram(attribute) {
    // Clear previous visualization
    document.getElementById("visualization").innerHTML = "";
    // Extract numerical values for the selected attribute
    var values = data.map(function(d) { console.log(d[attribute]); });
    // Set up dimensions for the histogram
    var width = 10000;
    var height = 800;
    var margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Create SVG element
    var svg = d3.select("#visualization")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    // Create scales for x and y axes
    var x = d3.scaleLinear()
              .domain(d3.extent(values))
              .range([margin.left, width - margin.right]);

    var bins = d3.histogram()
                 .domain(x.domain())
                 .thresholds(x.ticks(20))
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
       .attr("width", function(d) { return Math.max(0, x(d.x1) - x(d.x0) - 1); })
       .attr("y", function(d) { return y(d.length); })
       .attr("height", function(d) { return y(0) - y(d.length); });

    // Create x-axis
    svg.append("g")
       .attr("transform", "translate(0," + (height - margin.bottom) + ")")
       .call(d3.axisBottom(x));

    // Create y-axis
    svg.append("g")
       .attr("transform", "translate(" + margin.left + ",0)")
       .call(d3.axisLeft(y));
}
