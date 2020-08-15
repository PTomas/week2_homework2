var x = document.getElementById("jumboLink");
var y = document.getElementById("photoLink");
var z = document.getElementById("formLink");


  function jumboFunction() {
    //var x = document.getElementById("jumboLink");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  document.getElementById("photoLink").style.display = "none";
  function photoFunction() {
    //var y = document.getElementById("photoLink");
    
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    } else {
        y.style.display = "none";
    }
  }

  document.getElementById("formLink").style.display = "none";
  function formFunction() {
    //var x = document.getElementById("jumboLink");
    console.log("click")
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
    } else {
        z.style.display = "none";
    }
  }

