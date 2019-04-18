/* 
==================================> Confirm Delete
 */
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("deleteBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick =() => {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
/* 
==================================> Responsive top nav
*/


function displayToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

