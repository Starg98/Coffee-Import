// MOBILE NAVIGATION
function myFunction() {
  var x = document.getElementById("mobileLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// FAQ
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach(item => item.addEventListener("click", toggleAccordion));
