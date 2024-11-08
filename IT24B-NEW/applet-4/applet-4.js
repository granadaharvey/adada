// Fetch the JSON data from the file
fetch('applet-4.json')
  .then(response => response.json())  // Convert the response to JSON
  .then(data => {
    buildTable(data);  // Build the table with the fetched data

    // Event listener for the search input
    $('#search-input').on('keyup', function() {
      var value = $(this).val().toLowerCase();  // Get the search input value
      console.log('Search Value:', value);
      var filteredData = searchTable(value, data);  // Filter the data based on the search term
      buildTable(filteredData);  // Rebuild the table with filtered data
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to filter data based on the search input
function searchTable(value, data) {
  return data.filter(item => item.name.toLowerCase().includes(value));
}

// Function to build the table dynamically
function buildTable(data) {
  var tableBody = document.getElementById('Table');  // Get the table body
  tableBody.innerHTML = '';  // Clear existing rows

  // Loop through the data and create table rows
  data.forEach(item => {
    var row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.Course}</td>
        <td>${item.Address}</td>
      </tr>
    `;
    tableBody.innerHTML += row;  // Add the row to the table body
  });
}