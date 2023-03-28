// Side Nav Bar JS

function closeNav() {
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("faded").style.display = "none";
}

function openNav() {
    document.getElementById("sidenav").style.display = "block";
    document.getElementById("faded").style.display = "block";
}

// Back to Top JS

function backToTop() {
    document.documentElement.scrollTop = 0;
}

// BACKGROUND SLIDER
var backgroundIndex = 1;
showBackground(backgroundIndex);

function plusBack(n) {
    showBackground(backgroundIndex += n);
}

function showBackground(n) {
  var i;
  var back = document.getElementsByClassName("myBackground");
  if (n > back.length) {backgroundIndex = 1}    
  if (n < 1) {backgroundIndex = back.length}
  for (i = 0; i < back.length; i++) {
    back[i].style.display = "none";  
  }
 
  back[backgroundIndex-1].style.display = "block"; 
}