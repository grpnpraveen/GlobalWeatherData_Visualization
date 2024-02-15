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





        if(data_info[xAttribute].type=="categorical")
        {
            console.log("X cat");
            cat_data1=Object.fromEntries(get_unique(data,xAttribute).map((str, index) => [str, index]))
            console.log(cat_data1);
            // cat_data1 = get_graph_data(xAttribute);
            // Create scales
            xScale = d3.scaleLinear()
            .domain([0, Object.entries(cat_data1).length])
            .range([0, width]);
        }
        if(data_info[yAttribute].type=="categorical")
        {
            console.log("Y cat");
            cat_data2=Object.fromEntries(get_unique(data,yAttribute).map((str, index) => [str, index]))
            console.log(cat_data2);

            yScale = d3.scaleLinear()
            .domain([0,Object.entries(cat_data2).length]) // Adjusted to use the min and max of the data
            .range([height, 0])
            .nice(); // Ensures a "nice" scale with round numbers
        }

        // PLOTTING 
        if(cat_data1 && !cat_data2)  // first cat second num
        {
            console.log("1cat 2 num");
            // Draw dots
            svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", d => xScale(cat_data1[d[xAttribute]]))
            .attr("cy", d => yScale(parseInt(d[yAttribute])))
            .attr("r", 4)
            .attr("fill", "steelblue")
            .attr("opacity", 0.8);
        }
        if(!cat_data1 && cat_data2)  // first num second cat
        {
            console.log("1 num 2 cat");
            // Draw dots
            svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", d => xScale(parseInt(d[xAttribute])))
            .attr("cy", d => yScale(cat_data2[d[yAttribute]]))
            .attr("r", 4)
            .attr("fill", "steelblue")
            .attr("opacity", 0.8);
         
        }
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
        if(cat_data1 && cat_data2) // two cat
        {
            console.log("2 cat");
            // Draw dots
            // svg.selectAll(".dot")
            // .data(data)
            // .enter().append("circle")
            // .attr("class", "dot")
            // .attr("cx", d => xScale(cat_data1[d[xAttribute]]))
            // .attr("cy", d => yScale(cat_data2[d[yAttribute]]))
            // .attr("r", 4)
            // .attr("fill", "steelblue")
            // .attr("opacity", 0.8);


            svg.selectAll(".cluster")
            .data(data)
            .enter().append("g")
            .attr("class", "cluster")
            .attr("transform", d => `translate(${xScale(cat_data1[d[xAttribute]])}, ${yScale(cat_data2[d[yAttribute]])})`)
            .selectAll(".dot")
            .data(d => Array.from({ length: 25 })) // Adjust the number of points in each cluster
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", () => Math.random() * 30) // Random displacement for x-coordinate within the cluster
            .attr("cy", () => Math.random() * 30) // Random displacement for y-coordinate within the cluster
            .attr("r", 2)
            .attr("fill", "steelblue")
            .attr("opacity", 0.8);

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
        .text(data_info[yAttribute]["x_title"]+" vs "+data_info[xAttribute]["x_title"])
        .attr("fill", "white");
}
