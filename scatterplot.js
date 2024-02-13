function createScatterPlot(xAttribute, yAttribute) {
    // Clear previous visualization
    document.getElementById("visualization").innerHTML = "";

    // Set up dimensions and margins
    const margin = { top: 50, right: 30, bottom: 100, left: 60 }; // Increased bottom margin for labels
    const width = 1000 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3.select("#visualization")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    let l1 = [];
    let l2 = [];
    for (let i = 0; i < data.length; i++) {
        l1.push(parseInt(data[i][xAttribute]));
        l2.push(parseInt(data[i][yAttribute]));
    }

    let xScale, yScale;
    let cat_data1,cat_data2;
    let temp_data={};
    // Create scales with padding
    xScale = d3.scaleLinear()
        .domain([d3.min(l1), d3.max(l1)]) // Adjusted to use the min and max of the data
        .range([0, width])
        .nice(); // Ensures a "nice" scale with round numbers

    yScale = d3.scaleLinear()
        .domain([d3.min(l2), d3.max(l2)]) // Adjusted to use the min and max of the data
        .range([height, 0])
        .nice(); // Ensures a "nice" scale with round numbers


        if(!cat_data1 && !cat_data2) // two num
        {
            console.log("2 num");
            // Draw dots
            svg.selectAll(".dot")
                .data(data)
                .enter().append("circle")
                .attr("class", "dot")
                .attr("cx", d => xScale(parseInt(d[xAttribute])))
                .attr("cy", d => yScale(parseInt(d[yAttribute])))
                .attr("r", 4)
                .attr("fill", "steelblue")
                .attr("opacity", 0.8);
        }


        if(data_info[xAttribute].type=="categorical")
        {
            console.log("X cat");
            cat_data1 = get_graph_data(xAttribute);
            
            // for(let i = 0; i<cat_data1.length;i++)
            // {
    
                // }
            cat_data1 = cat_data1.map(obj => {
                console.log(temp_data[xAttribute]);
                return obj.y_values;});
    
            console.log(cat_data1);
            // Create scales
            xScale = d3.scaleLinear()
            .domain([0, d3.max(cat_data1, d => parseInt(d))])
            .range([0, width]);
        }
        if(data_info[yAttribute].type=="categorical")
        {
            console.log("Y cat");
            cat_data2 = get_graph_data(xAttribute);
            cat_data2 = cat_data1.map(obj => obj.y_values);
            // Create scales
            xScale = d3.scaleLinear()
            .domain([0, d3.max(cat_data1, d => parseInt(d))])
            .range([0, width]);
        }


        if(cat_data1 && !cat_data2)  // first cat second num
        {
            
        }
        if(!cat_data1 && cat_data2)  // first num second cat
        {
         
        }
      
        if(cat_data1 && cat_data2) // two cat
        {
    
        }











    // Draw x-axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    // Add x-axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 20) // Adjusted y position for label
        .style("text-anchor", "middle")
        .text(data_info[xAttribute]["x_title"])
        .attr("fill", "white");

    // Draw y-axis
    svg.append("g")
        .call(d3.axisLeft(yScale));

    // Add y-axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 20) // Adjusted y position for label
        .style("text-anchor", "middle")
        .text(data_info[yAttribute]["x_title"])
        .attr("fill", "white");

    // Add title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "24px")
        .text("Scatter Plot")
        .attr("fill", "white");
}
