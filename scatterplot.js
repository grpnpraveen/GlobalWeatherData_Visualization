function createScatterPlot(xAttribute, yAttribute) {
    // Clear previous visualization
    document.getElementById("visualization").innerHTML = "";

    // Set up dimensions and margins
    const margin = { top: 50, right: 30, bottom: 200, left: 200 }; // Increased bottom margin for labels
    const width = 1020 - margin.left - margin.right;
    const height = 800 - margin.top - margin.bottom;

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
    // let cat_data1,cat_data2;
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
        const uniqueCategoriesX = get_unique(data, xAttribute);
        xScale = d3.scaleBand()
            .domain(uniqueCategoriesX)
            .range([0, width])
            .padding(0.1); // Adjust padding between bars as needed
        }
        if(data_info[yAttribute].type=="categorical")
        {
            console.log("X cat");
        const uniqueCategoriesY = get_unique(data, yAttribute);
        yScale = d3.scaleBand()
            .domain(uniqueCategoriesY)
            .range([height,0])
            .padding(0.1); // Adjust padding between bars as needed
        }

        // PLOTTING 
        if(data_info[xAttribute].type=="categorical" && data_info[yAttribute].type!="categorical")  // first cat second num
        {
            console.log("1cat 2 num");
            // Draw dots
            svg.selectAll(".dot")
                .data(data)
                .enter().append("circle")
                .attr("class", "dot")
                .attr("cx", d => xScale(d[xAttribute]) + xScale.bandwidth() / 2) // Centering the dots within each category
                .attr("cy", d => yScale(parseInt(d[yAttribute])))
                .attr("r", 4)
                .attr("fill", "steelblue")
                .attr("opacity", 0.8);
        }
        if(data_info[xAttribute].type!="categorical" && data_info[yAttribute].type=="categorical")  // first num second cat
        {
            console.log("1 num 2 cat");
            // Draw dots
            svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", d => xScale(parseInt(d[xAttribute])))
            .attr("cy", d => yScale(d[yAttribute]) + yScale.bandwidth()/2 )
            .attr("r", 4)
            .attr("fill", "steelblue")
            .attr("opacity", 0.8);
         
        }
        if(data_info[xAttribute].type!="categorical" && data_info[yAttribute].type!="categorical") // two num
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
        if(data_info[xAttribute].type=="categorical" && data_info[yAttribute].type=="categorical") // two cat
        {
            console.log("2 cat");
            // Draw dots
           // Define a random number generator following a normal distribution
const normalRandom = d3.randomNormal(0, 5); // Adjust the standard deviation as needed

svg.selectAll(".cluster")
    .data(data)
    .enter().append("g")
    .attr("class", "cluster")
    .attr("transform", d => `translate(${xScale(d[xAttribute])}, ${yScale(d[yAttribute])})`)
    .selectAll(".dot")
    .data(d => Array.from({ length: 25 })) // Adjust the number of points in each cluster
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", () => normalRandom())
    .attr("cy", () => normalRandom())
    .attr("r", 2)
    .attr("fill", "steelblue")
    .attr("opacity", 0.8);


        }


// Draw x-axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("font-size", "9px") // Change font size here
    .attr("transform", "rotate(-45)")
    .attr("dy", "-0.5em")
    .attr("dx", "-1em")
    .style("text-anchor", "end");


    // Add x-axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 70) // Adjusted y position for label
        .style("text-anchor", "middle")
        .text(data_info[xAttribute]["x_title"])
        .attr("fill", "white");

    // Draw y-axis
    svg.append("g")
        .call(d3.axisLeft(yScale))
        .selectAll("text")
        .style("font-size", "10px") // Change font size here;

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
