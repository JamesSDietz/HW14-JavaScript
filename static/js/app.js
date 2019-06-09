//HW 14 -- JavaScript:  James Dietz

// from data.js
var tableData = data;

// Loops through array of objects in data then loops each object and populates the html table in DOM for index.html
var body = d3.select("tbody");

data.forEach(function(sighting) {
  console.log(sighting);
  var row = body.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  })

})

// First, I establish that I can filter the data.

var inputField = d3.select("#datetime");

inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);

  // filtering function for date box
  function selectDate(sighting) {
    return sighting.datetime === newText;
}

  // filter 
  var requestDate = data.filter(selectDate);

  // log to console to check
  console.log("Date Requested: ")
  console.log(requestDate);

});

d3.selectAll("button").on("click", function() {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
});


// Second, eventhandler for submit button:  displayed table deleted and replaced with filtered data table:
var submit = d3.select("#filter-btn");

submit.on("click", function(submitClicked) {

  //  Prevent page from auto refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // verify
  console.log ("input value ", inputValue);
  
  // repeat of custom filtering function
  function selectDate(sighting) {
    return sighting.datetime === inputValue;
  }
  
  // filter() uses the custom function as its argument
  var requestDate = data.filter(selectDate);

  //select and wipe clean the table
  var body2 = d3.select("tbody");
  body2.html("");

  //use requestDate array as data for table, much like above
  requestDate.forEach(function(sighting) {
    var row = body2.append("tr");
  
    Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    })

  })

  });
//});
