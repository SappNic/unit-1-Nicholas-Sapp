// initialize function called when the script loads
function initialize(){
	cities();
};

// function to create a table with cities and their populations
function cities(){
	// define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	// create a table element
	var table = document.createElement("table");

	// create a header row element and append it to the table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	// create the "City" and "Population" column headers
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
	// loop to add a new row for each city
    cityPop.forEach(function(cityObject){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	})
	
	// append the table element to the div
	document.querySelector("#mydiv").appendChild(table);

    addColumns(cityPop);
    addEvents();
	debugAjax(); // calls the debugAjax fuction

};

// adds columns to the table
function addColumns(cityPop){
    
	// select all column rows
	var rows = document.querySelectorAll("tr")
	// loops to add a new column to each row
	document.querySelectorAll("tr").forEach(function(row,i){
		// for first row in the table, add the column header
		if (i == 0){
    		// table header
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};

			// adds city size cell to the table
    		row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	};
	})
};

// mouse events function
function addEvents(){

    // selects the table element
	table = document.querySelector("table");

	// mouseover event
	document.querySelector("table").addEventListener("mouseover", function(){
		var color = "rgb(";
		//generate random colors
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		}
		table.style.color = color; // random table color
	}); 

	// function creates a pop up window
	function clickme(){
		alert('Hey, you clicked me!');
	};

	// activates pop up window
	table.addEventListener("click", clickme)
};

// calls the initializing function when the document has loaded
document.addEventListener('DOMContentLoaded',initialize)

// converts geojson dta into a readable string format
function debugCallback(myData){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend',"GeoJSON data: " + JSON.stringify(myData));
};

// fetches geojson
function debugAjax(){
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
		.then(function (response){
			debugCallback(response)})
};

