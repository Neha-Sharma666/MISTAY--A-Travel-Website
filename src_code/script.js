function myFunction() {
    document.getElementById("mydropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var DROPdown = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < DROPdowns.length; i++) {
        var openDROPdown = dropdowns[i];
        if (openDROPdown.classList.contains('show')) {
          openDROPdown.classList.remove('show');
        }
      }
    }
  }
  
  var mode = document.getElementById("mode");

  mode.onclick=function(){
    document.body.classList.toggle("dark-theme");
  }