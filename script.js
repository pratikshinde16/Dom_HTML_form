// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodInputs = document.querySelectorAll('input[name="food"]:checked');
    const foods = [...foodInputs].map(input => input.value).join(', ');
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    // Validate the form (optional)
    if (foodInputs.length < 2) {
      alert("Please select at least 2 foods.");
      return;
    }
  
    // Create a new table row with form values
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${foods}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;
  
    // Append the new row to the table body
    const tableBody = document.querySelector("#myTable tbody");
    tableBody.appendChild(newRow);
  
    // Clear the form fields
    document.getElementById("myForm").reset();
  }
  
  // Function to clear the form fields
  function clearForm() {
    document.getElementById("myForm").reset();
  }
  
  // Add event listener to the form submission
  document.getElementById("myForm").addEventListener("submit", handleSubmit);
  