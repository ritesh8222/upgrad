// Get the modal
var modal = document.getElementById("sgnup");

// Get the button that opens the modal
var btn = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementById("close2");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal1 = document.getElementById("sigin");

// Get the button that opens the modal
var btn1 = document.getElementById("signin");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// Get the modal
var modal2 = document.getElementById("createpost");

// Get the button that opens the modal
var btn2 = document.getElementById("crtpost");

// Get the <span> element that closes the modal
var span2 = document.getElementById("close3");

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


/*newuser() function moves user from signin modal to signup modal*/
function newuser()
{
     //It fetches modal id and hide it  
     var modal1 = document.getElementById("sigin");
     modal1.style.display = "none";

      //It hides signin and display us signup
      var modal = document.getElementById("sgnup");
      modal.style.display = "block";
}
     