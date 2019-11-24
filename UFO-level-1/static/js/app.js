// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function populate(data){ 
    tbody.text("");
    data.forEach(function(sighting){
    var new_tr = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value);	
    });
})};

populate(tableData);

function onpress(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // if date is entered
    if(date) {
        // create a filter
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    populate(filterData);
}

// update the table
d3.selectAll("#filter-btn").on("click", onpress);


