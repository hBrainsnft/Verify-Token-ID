var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    
    event.preventDefault();
    
    document.getElementById("inputButton").click();
  }
});



var inputButton = document.getElementById('inputButton');

function addGreen() {
  document.body.classList.remove("red");
  document.body.classList.add("green");


  document.getElementById("inputButton").classList.remove("red");
  document.getElementById("inputButton").classList.add("green");


  document.getElementById("myInput").classList.remove("red");
  document.getElementById("myInput").classList.add("green");

  document.getElementById("about").classList.remove("red");
  document.getElementById("about").classList.add("green");


  document.getElementById("x").classList.remove("add");
  document.getElementById("check").classList.remove("none");
  document.getElementById("check").classList.add("check");
 
}

function addRed() {
document.body.classList.remove("green");
  document.body.classList.add("red");


  document.getElementById("inputButton").classList.remove("green");
  document.getElementById("inputButton").classList.add("red");


  document.getElementById("myInput").classList.remove("green");
  document.getElementById("myInput").classList.add("red");


  document.getElementById("check").classList.add("none");
  document.getElementById("x").classList.add("add");

}



function about(des) {
  document.getElementById("about").innerHTML = "Authentic Token ID: <br><br>" + des;
}

function clear() {
  document.getElementById("about").innerHTML = "Unknown Token ID";
}

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("myInput").value;

  // Displaying the value
  if (inputVal == "") {}

  else if (inputVal == "0.0.653544") {
    about("Early Brain")
    addGreen();
   


  } else {
    addRed();
   clear();
  }
}
