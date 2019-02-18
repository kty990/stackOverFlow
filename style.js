//document.getElementById("mySidenav").addEventListener("click", toggleNav);

var start = true;

function openNav(){
      var start = false;
      test();
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
      test();
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.body.style.backgroundColor = "white";

}

function test(){
  var x = document.getElementById("bttn1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("bttn2");
  if (y.style.display === "none") {
    y.style.display = "block";
    y.style.color = "white";
  } else {
    y.style.display = "none";
    y.style.color = "none";
  }
}

function something(){
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
}


/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
function drop(){
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) { //this is not getting called for some reason
    dropdown[i].addEventListener("click", something());
    alert("Please wokr");
  }
}

function setLocation(){
  var thing = document.getElementById("bttn1");
  thing.style.left = "auto";
}