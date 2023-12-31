/*
  Citation for the following JavaScript file:
  Date: 05/30/2023
  Adapted from: delete_person.js
  Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main
*/
function deleteStudentCourse(idStudent, idCourse) {
    // Put our data we want to send in a javascript object
    let data = {
      idStudent: idStudent,
      idCourse: idCourse
    };
  
    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/delete-studentCourse-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");
  
    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {
  
            // Add the new data to the table
            deleteRow(idStudent, idCourse);
  
        }
        else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.")
        }
    }
    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
  }
  
  
  function deleteRow(idStudent, idCourse){
  location.reload()
    // let table = document.getElementById("courses-table");
    // for (let i = 0, row; row = table.rows[i]; i++) {
    //    //iterate through rows
    //    //rows would be accessed using the "row" variable assigned in the for loop
    //    if (table.rows[i].getAttribute("data-value") == idCourse) {
    //         table.deleteRow(i);
    //         break;
    //    }
    // }
  }