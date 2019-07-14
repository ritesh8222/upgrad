/* del() function activates the modal that deletes the blog */
function del()
{
    // Get the modal
    var modal = document.getElementById("bin");

    // Get the button that opens the modal
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

/* hid() hides the modal that deletes the blog posts */
function hid() {
  // Hides the modal when user click on the 'No' button
  var btn = document.getElementsByClassName('modal5')[1];
  btn.style.display = "none";

}